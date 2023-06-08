<template>
  <input
    type="radio"
    :id="id"
    :name="name"
    :value="value"
    class="hidden peer"
  />
  <label
    :for="id"
    class="block space-x-2 items-center justify-center w-full p-5 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <Icon v-if="icon" :name="icon" size="20px" class="me-3" />
    <span class="w-full">{{ label }}</span>
    <Icon name="mdi:arrow-right" />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  id?: string;
  value: any;
  label: string;
  icon?: string;
}>();
</script>
