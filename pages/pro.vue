<template>
  <section>
    <div class="mx-auto">
        <div class="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div class="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
                <NuxtLink to="/product/financial-engineering" class="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span class="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600">New</span> <span class="text-sm font-medium">Financial Engineering is out! See what's new</span> 
                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
                <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">Trader4 Pro, Your last financial sign up</h1>
                <p class="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">Here at Trader4 we focus on markets where innovation can unlock long-term value and drive economic growth.</p>
                <form class="max-w-lg mx-auto lg:ml-0" action="#">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email address" required>
                        <button type="submit" class="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Get Started
                        </button>
                    </div>
                </form>                        
            </div>
            <div class="col-span-6">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" class="dark:hidden" alt="mockup">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png" class="hidden dark:block" alt="mockup dark">
            </div>
        </div>
        <div class="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div class="flex justify-center" v-for="item in heroFeatures">
                <Icon class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" :name="item.icon" />
                <div>
                    <h3 class="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">{{item.title}}</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script lang="ts" setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});

const heroFeatures = [
  {icon: "mdi:speedometer", title: "Data Priority", description: "Data is the most important thing in the world, we will help you to get the best data for your trading. Data proprity will help to get better quotes and trades in the market."},
  {icon: "mdi:dots-grid", title: "Advance Features", description: "Risk Management, Money Management, Portfolio, TraderHub, ChartHub, Trading Account Cloud Management, and so more  to make a pro trading experience."},
  {icon: "mdi:cloud", title: "SLA 99.97%", description: "Get the stable cloud based services with 99.97% uptime. Access to Multi source data, Realtime data, and Backup services. Trading is never stop, so our cloud infrastructure is never stop too."},
]
</script>
