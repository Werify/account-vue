<template>
  <section class=" ">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Connect Your Trading Account
      </h2>
      <TradingAccountForm @submit="submitFrom" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { createTradingAccount } = useTradingStore();

const submitFrom = async (data: any) => {
  console.log(data);
  const res = await createTradingAccount(data as ITradingAccounts);
  console.log(res);
};
</script>

<style scoped></style>
