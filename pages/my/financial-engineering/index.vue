<template>
  <section>
  <div class="mx-auto">
    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
        <NuxtLink :to="product.link" v-for="product in products" class="p-6 bg-white rounded shadow dark:bg-gray-800">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Icon class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300 mdi" :name="product.icon" />
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">{{ product.title }}</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">{{ product.description }}</p>
        </NuxtLink>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
const products = [
{ 
    icon: "mdi:asterisk-circle-outline",
    title: "Risk Managements",
    description: "Risk management is the process of identifying, assessing and controlling threats to an organization's capital and earnings.",
    link: "/my/financial-engineering/risk-managements",
  },
  {
    icon: "mdi:currency-usd",
    title: "Money Managements",
    description: "Money management is the process of budgeting, saving, investing, spending or otherwise overseeing the capital usage of an individual or group.",
    link: "/my/financial-engineering/money-managements",
  },
  { 
    icon: "mdi:book-open-outline",
    title: "Trading Plans",
    description: "A trading plan is a systematic method for identifying and trading securities that takes into consideration a number of variables including time, risk, and the investor’s objectives.",
    link: "/my/financial-engineering/trading-plans",
  }
];

</script>