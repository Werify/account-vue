<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Cash Flow item
      </h2>
      <VForm
        :validation-schema="formSchema"
        @submit="addItem"
        @keypress.enter.prevent
        @keyup.enter.prevent
      >
        <div class="grid gap-4 sm:grid-cols-12 sm:gap-6 items-center">
          <!-- * title -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <VField
              v-model="formData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>
          <!-- * title -->

          <div class="lg:col-span-6"></div>

          <!-- * market -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Markets
            </label>
            <SharedMultiSelectTagging
              v-model="formData.market_id"
              :isMultiple="false"
              :options="markets"
              key="markets"
              :field-name="{
                label: 'name',
                key: 'uuid',
              }"
              :placeholder="'Select Markets'"
            />
          </div>
          <!-- * market -->

          <!-- * trading account -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Trading Accounts
            </label>
            <SharedMultiSelectTagging
              v-model="formData.market_id"
              :options="markets"
              key="markets"
              :field-name="{
                label: 'name',
                key: 'uuid',
              }"
              :placeholder="'Select Trading Accounts'"
            />
          </div>
          <!-- * trading account -->

          <!-- * till -->
          <div class="w-full lg:col-span-4 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Till
            </label>
            <input
              v-model="formData.till"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="date"
              name=""
              id=""
            />
          </div>
          <!-- * till -->

          <!-- * from -->
          <div class="w-full lg:col-span-4 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              From
            </label>
            <input
              v-model="formData.from"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="date"
              name=""
              id=""
            />
          </div>
          <!-- * from -->

          <!-- * public -->
          <div class="w-full lg:col-span-4 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Public
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="formData.public"
                type="checkbox"
                class="sr-only peer outline-none"
              />
              <div
                class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
          <!-- * public -->

          <!-- * description -->
          <div class="w-full col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              v-model="formData.description"
              rows="4"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="write more"
            />
          </div>
          <!-- * description -->
        </div>

        <!-- * submit -->
        <button
          type="submit"
          class="items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loading"
        >
          <Icon
            v-if="loading"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Publish</span>
        </button>
        <!-- * submit -->
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();
import * as Yup from "yup";

const { loading, createItem } = useMyStore();

const { markets, fetchMarkets } = useMarketStore();
await fetchMarkets();

const formData = ref({
  market_id: [],
  trading_account_id: "",
  title: "",
  description: "",
  till: "",
  from: "",
  public: false,
});

const addItem = () => {
  if (formData.value.market_id.length >= 1) {
    // @ts-ignore
    formData.value.market_id = formData.value.market_id[0].uuid;
  } else {
    // @ts-ignore
    delete formData.value.markets;
  }
  console.log(formData.value);

  createItem("/v1/my/financial-engineering/money-managements", formData.value)
    .then((res) => {
      console.log(res.data);
      console.log(res.error);
    })
    .catch((err) => {
      console.warn(err.data.message);
    });
};

// Form Validation
const formSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
});
</script>

<style>
.tox-notifications-container {
  display: none;
}
.radio-button {
  @apply inline-flex items-center justify-center w-full px-4 py-2 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700;
}
</style>
