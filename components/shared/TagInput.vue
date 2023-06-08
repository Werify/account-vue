<template>
  <div class="relative">
    <section class="custom-multi-select">
      <SharedOnClickOutside :clickOutside="() => (showOptions = false)">
        <div
          class="flex flex-wrap flex-col rounded border dark:border-gray-700"
        >
          <div>
            <div
              v-for="(tag, idx) in selectedTags"
              :key="`tag-${idx}`"
              class="inline-flex cursor-pointer hover:bg-gray-300 items-center px-1 py-1 m-1 bg-gray-200 rounded dark:bg-gray-500 dark:text-gray-100"
              @click="removeTag(idx)"
            >
              <span class="text-xs font-semibold me-1">{{ tag }}</span>
              <Icon name="mdi:close" size="14px" />
            </div>
          </div>
          <div class="relative">
            <input
              v-model="inputValue"
              @keyup.enter="addTag"
              class="custom-input"
              placeholder="press ENTER to add tag"
            />
          </div>
        </div>
      </SharedOnClickOutside>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Array,
  },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// data
const selectedTags = ref<string[]>([]);
const inputValue = ref<string>();
const showOptions = ref<boolean>(false);

function addTag() {
  if (inputValue.value) {
    selectedTags.value.push(inputValue.value);
    inputValue.value = "";
  }
}

const removeTag = (idx: number) => {
  selectedTags.value.splice(idx, 1);
};

watch(selectedTags.value, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped>
.custom-multi-select {
  @apply bg-white  text-gray-900 text-sm rounded  outline-none  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
.custom-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
.list-items {
  @apply absolute w-full max-h-40 mb-5 rounded overflow-y-auto z-10 py-1 dark:bg-gray-700 bg-white;
}
.list-items .item {
  @apply px-3 py-1 text-sm text-gray-700 hover:text-white dark:text-white cursor-pointer hover:bg-blue-500;
}
</style>
