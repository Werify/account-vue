<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Risk Management Plan
      </h2>
      <VForm :validation-schema="riskSchema" @submit="addRisk">
        <div class="grid gap-4 sm:grid-cols-12 sm:gap-6 items-start">
          <div class="col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <VField
              v-model="riskData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Max Risk
            </label>

            <VField
              v-model="riskData.max_risk"
              type="text"
              name="max_risk"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max risk "
            />
            <VErrorMessage class="text-red-700 text-sm" name="max_risk" />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Max Risk Mode</label
            >
            <input
              v-model="riskData.max_risk_mode"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Max Risk Mode"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Max Risk Calculation</label
            >
            <input
              v-model="riskData.max_risk_calculation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Max Risk calculation"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Max Daily Risk
            </label>

            <VField
              v-model="riskData.max_daily_risk"
              type="text"
              name="max_daily_risk"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max daily risk "
            />
            <VErrorMessage class="text-red-700 text-sm" name="max_daily_risk" />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Max Daily Risk Mode</label
            >
            <input
              v-model="riskData.max_daily_risk_mode"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max daily risk mode"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Max Daily Risk Calculation</label
            >
            <input
              v-model="riskData.max_daily_risk_calculation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max daily risk calculation"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Risk Per Chart
            </label>

            <VField
              v-model="riskData.risk_per_chart"
              type="text"
              name="risk_per_chart"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per chart "
            />
            <VErrorMessage class="text-red-700 text-sm" name="risk_per_chart" />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Risk Per Chart Mode</label
            >

            <input
              v-model="riskData.risk_per_chart_mode"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per chart mode"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Risk Per Chart Calculation</label
            >
            <input
              v-model="riskData.risk_per_chart_calculation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per chart calculation"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Risk Per Trade
            </label>

            <VField
              v-model="riskData.risk_per_trade"
              type="text"
              name="risk_per_tradet"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per trade"
            />
            <VErrorMessage class="text-red-700 text-sm" name="risk_per_trade" />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Risk Per Trade Mode</label
            >
            <input
              v-model="riskData.risk_per_trade_mode"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per trade mode"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Risk Per Trade Calculation</label
            >
            <input
              v-model="riskData.risk_per_trade_calculation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per trade calculation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Risk Reward Ratio</label
            >
            <input
              v-model="riskData.risk_reward_ratio"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk reward ratio"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Positive Correlation
            </label>
            <input
              v-model="riskData.positive_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="positive correlation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Negative Correlation</label
            >
            <input
              v-model="riskData.negative_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="negative correlation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Low Correlation</label
            >
            <input
              v-model="riskData.low_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="low correlation"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >News Trading</label
            >

            <input
              v-model="riskData.news_trading"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="news trading"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Allowed Instruments</label
            >
            <input
              v-model="riskData.allowed_instruments"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed instruments"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Allowed Times</label
            >
            <input
              v-model="riskData.allowed_times"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed times"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Allowed Order Types</label
            >

            <input
              v-model="riskData.allowed_order_types"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed order types"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Trading Accounts
            </label>
            <SharedMultiSelectTagging
              v-model="riskData.trading_account"
              :placeholder="'Select trading accounts'"
            />
          </div>
          <div class="col-span-full grid grid-cols-12 space-y-5 items-end">
            <div class="justify-start flex lg:col-span-3 col-span-full">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >public</label
              >
              <div>
                <label
                  class="relative inline-flex items-center ms-4 cursor-pointer"
                >
                  <input
                    v-model="riskData.public"
                    type="checkbox"
                    class="sr-only peer outline-none"
                  />
                  <div
                    class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
            <div class="w-full justify-start flex lg:col-span-3 col-span-full">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >hedge</label
              >
              <div>
                <label
                  class="relative ms-4 inline-flex items-center cursor-pointer"
                >
                  <input
                    v-model="riskData.hedge"
                    type="checkbox"
                    class="sr-only peer outline-none"
                  />
                  <div
                    class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
            <div class="w-full justify-start flex lg:col-span-3 col-span-full">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Stop Loss</label
              >
              <div>
                <label
                  class="relative ms-4 inline-flex items-center cursor-pointer"
                >
                  <input
                    v-model="riskData.required_stop_loss"
                    type="checkbox"
                    class="sr-only peer outline-none"
                  />
                  <div
                    class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
            <div class="w-full justify-start flex lg:col-span-3 col-span-full">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Target Profit</label
              >
              <div>
                <label
                  class="relative ms-4 inline-flex items-center cursor-pointer"
                >
                  <input
                    v-model="riskData.required_target_profit"
                    type="checkbox"
                    class="sr-only peer outline-none"
                  />
                  <div
                    class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
            <div class="w-full justify-start flex lg:col-span-3 col-span-full">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Risk Relative</label
              >
              <div>
                <label
                  class="relative ms-4 inline-flex items-center cursor-pointer"
                >
                  <input
                    v-model="riskData.is_max_risk_relative"
                    type="checkbox"
                    class="sr-only peer outline-none"
                  />
                  <div
                    class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
          </div>
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
import { useRiskStore } from "~/store/risk-managements";

const riskData = ref({
  title: undefined,
  max_risk: undefined,
  max_risk_mode: undefined,
  max_risk_calculation: undefined,
  is_max_risk_relative: true,
  max_daily_risk: undefined,
  max_daily_risk_mode: undefined,
  max_daily_risk_calculation: undefined,

  risk_per_chart: undefined,
  risk_per_chart_mode: undefined,

  risk_per_chart_calculation: undefined,

  risk_per_trade: undefined,
  risk_per_trade_mode: undefined,

  risk_per_trade_calculation: undefined,
  risk_reward_ratio: undefined,
  positive_correlation: undefined,
  negative_correlation: undefined,
  low_correlation: undefined,
  hedge: false,
  required_stop_loss: false,
  required_target_profit: false,
  news_trading: undefined,
  allowed_instruments: undefined,
  allowed_times: undefined,
  allowed_order_types: undefined,
  public: true,
  trading_account: undefined,
});
const hasContentError = ref(false);
const loadingDisabled = ref(false);
const store = useRiskStore();
const addRisk = () => {
  if (riskData.value) {
    loadingDisabled.value = true;
    store
      .createRiskManagement(riskData.value)
      .then((res: any) => {
        if (res.data.succeed && res.data.results.uuid) {
          //@ts-ignore
          $toast.success("Created Successfully", {
            position: "top-right",
          });
        } else {
          loadingDisabled.value = false;
          hasContentError.value = true;
        }
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
const riskSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
  max_risk: Yup.string().required("Max Risk is Required"),
  max_daily_risk: Yup.string().required("Max Daily Risk is Required"),
  risk_per_chart: Yup.string().required("Risk Per Chart is Required"),
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
