<template>
  <section class=" ">
    <div class="py-8 px-4 mx-auto">
      <h2
        class="mb-7 text-xl text-center font-bold text-gray-900 dark:text-white">
        Connect Your Trading Account
      </h2>
      <TradingAccountForm @submit="submitFrom" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { createTradingAccount } = useTradingStore();
const { $toast } = useNuxtApp();

const submitFrom = async (data: any) => {
  createTradingAccount(data as ITradingAccounts)
    .then((res: any) => {
      $toast.success(res.data.message, { position: "top-right" });
      useRouter().push("/my/trading/accounts");
    })
    .catch((err) => {
      $toast.error(err.data.message, { position: "top-right" });
    });
};
</script>

<style scoped></style>
