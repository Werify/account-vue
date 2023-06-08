<template>
  <div>
    <BaseTable
      :table-button="{ link: '/connect', text: 'Connect' }"
      endpoint="/my/trading/accounts"
      :header-filters="headerFilters"
      title="Trading Accounts" />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "Number", index: 2, key: "identity" },
  { text: "slogan", index: 3, key: "slogan" },
  { text: "type", index: 5, key: "type" },
  { text: "status", index: 6, key: "status" },
  { text: "Published At", index: 7, key: "published_at" },
  { text: "actions", index: 9, key: "actions" },
]);
</script>
