<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Money Management Plan
      </h2>
      <VForm :validation-schema="moneySchema" @submit="addData">
        <div class="grid gap-4 sm:grid-cols-9 sm:gap-6 items-start">
          <div class="col-span-full max-w-lg">
            <GlobalTooltip id="tooltip-title" text="Title" />
            <div class="flex">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <Icon
                data-tooltip-target="tooltip-title"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <VField
              v-model="moneyData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>

          <div class="col-span-full lg:col-span-3">
            <GlobalTooltip id="tooltip-size" text="Position Size" />
            <div class="flex">
              <label
                for="position_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position Size
              </label>
              <Icon
                data-tooltip-target="tooltip-size"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <VField
              v-model="moneyData.position_size"
              type="text"
              name="position_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size"
            />
            <VErrorMessage class="text-red-700 text-sm" name="position_size" />
          </div>

          <div class="col-span-full lg:col-span-3">
            <GlobalTooltip id="tooltip-position" text="Position Size Mode" />
            <div class="flex">
              <label
                for="position_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position Size Mode
              </label>
              <Icon
                data-tooltip-target="tooltip-position"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="moneyData.position_size_mode"
              name="position_size_mode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size mode"
            >
              <option
                v-for="(risktype, riskIndex) in POSITION_SIZE_MODE"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="col-span-full lg:col-span-3">
            <GlobalTooltip
              id="tooltip-calculation"
              text="Position Size Calculation"
            />
            <div class="flex">
              <label
                for="position_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position Size Calculation
              </label>
              <Icon
                data-tooltip-target="tooltip-calculation"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="moneyData.position_size_calculation"
              name="position_size_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size calculation"
            >
              <option
                v-for="(risktype, riskIndex) in POSITION_SIZE_CALCULATION"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="col-span-full lg:col-span-3">
            <GlobalTooltip id="tooltip-maximum" text="Maximum Size" />
            <div class="flex">
              <label
                for="position_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Maximum Size
              </label>
              <Icon
                data-tooltip-target="tooltip-maximum"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="moneyData.maximum_size"
              type="number"
              name="maximum_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="maximum size"
            />
          </div>
          <div class="col-span-full lg:col-span-3">
            <GlobalTooltip id="tooltip-minimum" text="Minimum Size" />
            <div class="flex">
              <label
                for="position_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Minimum Size
              </label>
              <Icon
                data-tooltip-target="tooltip-minimum"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="moneyData.minimum_size"
              type="number"
              name="minimum_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="minimum size"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="tooltip-trading" text="Trading Accounts" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Trading Accounts</label
              >
              <Icon
                data-tooltip-target="tooltip-trading"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="moneyData.tradingAccounts"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option
                v-for="(account, index) in tradingAccounts"
                :key="index"
                :value="account.uuid"
              >
                {{ account.identity }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="tooltip-status" text="Status" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Status
              </label>
              <Icon
                data-tooltip-target="tooltip-status"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="moneyData.status"
                  type="radio"
                  name="status"
                  id="active"
                  :value="30220"
                  class="hidden peer"
                />
                <label for="active" class="radio-button">
                  <span class="w-full">Active</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="moneyData.status"
                  type="radio"
                  name="status"
                  id="inactive"
                  :value="30221"
                  class="hidden peer"
                />
                <label for="inactive" class="radio-button">
                  <span class="w-full">Inactive</span>
                </label>
              </div>
            </div>
          </div>
          <!-- <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Trading Accounts
            </label>
            <SharedMultiSelectTagging
              v-model="moneyData.trading_account"
              :placeholder="'Select trading accounts'" />
          </div> -->
          <!-- <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Instrument
            </label>
            <SharedMultiSelectTagging
              v-model="moneyData.instrument"
              :placeholder="'Select instrument'" />
          </div> -->
        </div>
        <button
          type="submit"
          class="items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled"
        >
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Publish</span>
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();

import Editor from "@tinymce/tinymce-vue";
import * as Yup from "yup";
import { initFlowbite } from "flowbite";
const router = useRouter();
const { fetchAccounts, tradingAccounts } = useTradingStore();
onMounted(() => {
  nextTick(() => {
    fetchAccounts();
    initFlowbite();
  });
});
const moneyData = ref({
  title: undefined,
  position_size: undefined,
  position_size_mode: 30200,
  position_size_calculation: 30210,
  maximum_size: undefined,
  minimum_size: undefined,
  status: "30220",
  instruments: undefined,
  tradingAccounts: [],
});
const POSITION_SIZE_MODE = [
  {
    title: "Balance",
    type: 30200,
  },
  {
    title: "Equity",
    type: 30201,
  },
  {
    title: "Free Margin",
    type: 30202,
  },
  {
    title: "Margin",
    type: 30203,
  },
];
const POSITION_SIZE_CALCULATION = [
  {
    title: "Percentage",
    type: 30210,
  },
  {
    title: "Amount",
    type: 30211,
  },
  {
    title: "Lots",
    type: 30212,
  },
];
const STATUS = [
  {
    title: "Active",
    type: 30220,
  },
  {
    title: "Inactive",
    type: 30221,
  },
];
const hasContentError = ref(false);
const loadingDisabled = ref(false);
// const store = useRiskStore();
const { createItem } = useMyStore();
const addData = () => {
  if (moneyData.value) {
    loadingDisabled.value = true;
    createItem(
      "/v1/my/financial-engineering/money-managements",
      moneyData.value
    )
      .then((res: any) => {
        if (res.data.succeed && res.data.results.uuid) {
          //@ts-ignore
          $toast.success("Created Successfully", {
            position: "top-right",
          });
          router.push("/my/financial-engineering/money-managements");
        } else {
          loadingDisabled.value = false;
          hasContentError.value = true;
        }
        loadingDisabled.value = false;
      })
      .catch((err) => {
        //@ts-ignore
        $toast.error(err.message.toString(), {
          position: "top-right",
        });
        loadingDisabled.value = false;
      });
  } else {
    loadingDisabled.value = false;
    hasContentError.value = true;
  }
};

// Form Validation
const moneySchema = Yup.object({
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
