<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/create',
        text: 'Add',
      }"
      endpoint="/my/financial-engineering/risk-managements"
      :header-filters="headerFilters"
      title="Risk Managements" />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "title", index: 1, key: "title" },
  { text: "public", index: 2, key: "public" },
]);
</script>
