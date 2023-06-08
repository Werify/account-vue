<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/create',
        text: 'Add',
      }"
      endpoint="/my/financial-engineering/cash-flows/investings"
      :header-filters="headerFilters"
      title="Cash Flows Investings"
    />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "title", index: 1, key: "title" },
  { text: "id", index: 1, key: "uuid" },
]);
</script>
