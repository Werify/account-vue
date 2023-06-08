<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/create',
        text: 'Add',
      }"
      endpoint="/my/financial-engineering/trading-plans/strategies"
      :header-filters="headerFilters"
      title="Trading Plans Strategies"
    />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "title", index: 1, key: "title" },
  { text: "id", index: 1, key: "uuid" },
]);
</script>
