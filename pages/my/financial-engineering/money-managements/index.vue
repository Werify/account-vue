<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/create',
        text: 'Add',
      }"
      endpoint="/my/financial-engineering/money-managements"
      :header-filters="headerFilters"
      title="Money Managements" />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "title", index: 1, key: "title" },
  { text: "status", index: 2, key: "status" },
]);
</script>
