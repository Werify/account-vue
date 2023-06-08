<template>
  <div
    :id="props.id"
    role="tooltip"
    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-800">
    {{ props.text }}
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  id: string;
  text: string;
}>();
</script>
