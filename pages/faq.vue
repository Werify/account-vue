<template>
  <div class="py-8 mx-auto max-w-screen-2xl sm:py-16">
      <h2 class="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div class="mb-10" v-for="item in items">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      {{item.question}}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{{ item.answer }}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    "question":"What does \"free updates\" include?",
    "answer":"The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well."
  },
  {
    "question":"What is the refund policy?",
    "answer":"We do not offer refunds for this product. You can use the free version of this product to test it out before purchasing the full version."
  },
  {
    "question":"What is the difference between the plans?",
    "answer":"The difference between the plans is the amount of features that are available. The free version of this product is limited in features and is meant to be used as a demo. The full version of this product has all the features that are available."
  }
]
</script>
