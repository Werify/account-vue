<template>
  <section>
  <div class="mx-auto">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome back, {{user}}</h2>
          <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Let`s find out what is ideal today for financial life. Here is what we think can make a memorable experience for you.</p>
      </div>
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
let user = useCookie("user", { secure: true }).value as string;
if(user.first_name === null && user.middle_name === null && user.last_name === null){
  user = user.email;
}else{
  user = user.first_name + " " + user.middle_name + " " + user.last_name;
}
const products = [
{ 
    icon: "mdi:pencil",
    title: "Posts",
    description: "Create, edit, and manage all your posts in one place.",
    link: "my/posts",
  },
  {
    icon: "mdi:trending-up",
    title: "Trading",
    description: "Track your trading performance and improve your strategy.",
    link: "my/trading",
  },
  { 
    icon: "mdi:finance",
    title: "Financial Engineering",
    description: "Manage your financial life and improve your financial health.",
    link: "my/financial-engineering",
  },
  { 
    icon: "mdi:cloud",
    title: "Cloud",
    description: "Manage your cloud services and deploy your trading bots.",
    link: "my/cloud",
  },
  { 
    icon: "mdi:account",
    title: "Profile",
    description: "Personalize your profile and manage your account.",
    link: "my/profile",
  },
];

</script>