<template>
  <!-- Block start -->
  <section class="py-8 lg:py-0">
    <div class="lg:flex">
      <div class="flex items-center mx-auto px-4 md:px-8 xl:px-0">
        <div class="w-full">
          <div
            class="flex items-center justify-center mb-8 space-x-4 lg:hidden"
          >
            <a href="#" class="flex items-center text-2xl font-semibold">
              <img
                class="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              />
              <span class="text-gray-900 dark:text-white">Trader 4</span>
            </a>
          </div>
          <ol
            class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base"
          >
            <li
              v-for="(step, index) in steps"
              :key="index"
              :class="{
                'text-gray-900 dark:text-white': step.active,
                'text-gray-500 dark:text-gray-400': !step.active,
                'after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
                  steps.length - 1 !== index,
              }"
              class="flex items-center"
            >
              <div
                class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
              >
                <div class="mr-2 sm:mb-2 sm:mx-auto">{{ index + 1 }}</div>
                {{ step.title }}
              </div>
            </li>
          </ol>
          <section>
            <!-- Block end -->
            <VForm
              id="trading_account_create"
              class="form"
              @submit="nextStep"
              :validation-schema="currentSchema"
              keep-values
              v-slot="{ handleSubmit, values }"
            >
              <template v-if="index === 0">
                <div class="flex md:flex-row flex-col gap-4 my-3">
                  <div class="basis-full">
                    <label for="broker_id" class="custom-input-label">
                      Select Market
                    </label>
                    <VField
                      as="select"
                      name="market_id"
                      class="custom-input"
                      v-model="market_id"
                    >
                      <option
                        :value="item.uuid"
                        v-for="(item, index) in markets"
                        :key="index"
                      >
                        {{ item.name }}
                      </option>
                    </VField>
                    <div class="text-red-500 text-sm p-1">
                      <div class="fv-help-block">
                        <VErrorMessage name="market_id" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="index === 1">
                <div class="basis-full">
                  <label for="server_id" class="custom-input-label"
                    >Broker</label
                  >
                  <VField
                    as="select"
                    name="broker_id"
                    class="custom-input"
                    v-model="model.broker_id"
                  >
                    <option
                      :value="item.uuid"
                      v-for="(item, index) in filterdBrokers"
                      :key="index"
                    >
                      {{ item.name }}
                    </option>
                  </VField>
                  <div class="text-red-500 text-sm p-1">
                    <div class="fv-help-block">
                      <VErrorMessage name="broker_id" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 2">
                <div class="basis-full">
                  <label for="server_id" class="custom-input-label"
                    >Platform</label
                  >
                  <VField
                    as="select"
                    name="platform_id"
                    class="custom-input"
                    v-model="model.platform_id"
                  >
                    <option
                      :value="item.uuid"
                      v-for="(item, index) in filterdPlatforms"
                      :key="index"
                    >
                      {{ item.title }}
                    </option>
                  </VField>
                  <div class="text-red-500 text-sm p-1">
                    <div class="fv-help-block">
                      <VErrorMessage name="platform_id" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 3">
                <div class="basis-full">
                  <label for="server_id" class="custom-input-label">
                    Server
                  </label>
                  <VField
                    as="select"
                    name="server_id"
                    class="custom-input"
                    v-model="model.server_id"
                  >
                    <option
                      :value="item.uuid"
                      v-for="(item, index) in filterdServers"
                      :key="index"
                    >
                      {{ item.title }}
                    </option>
                  </VField>
                  <div class="text-red-500 text-sm p-1">
                    <div class="fv-help-block">
                      <VErrorMessage name="server_id" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="lg:col-span-1 col-span-full">
                    <label for="server_id" class="custom-input-label">
                      Secret
                    </label>
                    <VField
                      name="secret"
                      class="custom-input"
                      v-model="model.secret"
                    >
                    </VField>
                    <div class="text-red-500 text-sm p-1">
                      <div class="fv-help-block">
                        <VErrorMessage name="secret" />
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-1 col-span-full">
                    <label for="server_id" class="custom-input-label">
                      Read Only Secret
                    </label>
                    <VField
                      name="read_only_secret"
                      class="custom-input"
                      v-model="model.read_only_secret"
                    >
                    </VField>
                    <div class="text-red-500 text-sm p-1">
                      <div class="fv-help-block">
                        <VErrorMessage name="read_only_secret" />
                      </div>
                    </div>
                  </div>
                </div>
                <label for="server_id" class="custom-input-label">
                  Identity
                </label>
                <VField
                  name="identity"
                  class="custom-input"
                  v-model="model.identity"
                >
                </VField>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <VErrorMessage name="identity" />
                  </div>
                </div>
              </template>
              <div class="my-4">
                <button
                  v-if="index !== 0"
                  @click="prevStep()"
                  type="button"
                  class="px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded !bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  prev
                </button>
                <button
                  v-if="index !== 4"
                  type="submit"
                  class="float-right px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded !bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Next
                </button>

                <button
                  v-if="index === 4"
                  type="submit"
                  class="float-right px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded !bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Finish
                </button>
              </div>
            </VForm>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import * as Yup from "yup";

// create 4 steps forms data
const steps = reactive([
  {
    title: "Market",
    icon: "iconsminds-air-balloon-1",
    active: true,
  },
  {
    title: "Broker",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
  {
    title: "Platform",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
  {
    title: "Server",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
  {
    title: "Secret & Identity",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
]);

const index = ref<number>(0);

function nextStep(values: any) {
  if (index.value === 4) {
    onSubmit();
    return;
  }

  if (index.value === 0) {
    fetchFilterdBrokers(market_id.value);
  }
  if (index.value === 1) {
    fetchFilterdPlatforms(model.broker_id);
  }
  if (index.value === 2) {
    fetchFilterdServers(model.broker_id, model.platform_id);
  }

  steps[index.value].active = false;
  steps[index.value + 1].active = true;
  index.value++;
}
function prevStep() {
  steps[index.value].active = false;

  steps[index.value - 1].active = true;
  index.value--;
}

// Validations Account Details
const emit = defineEmits({
  submit: (value: TradingAcoounts) => true,
});

const {
  fetchMarkets,
  fetchFilterdBrokers,
  filterdBrokers,
  markets,
  fetchFilterdPlatforms,
  filterdPlatforms,
  fetchFilterdServers,
  filterdServers,
} = useMarketStore();

const market_id = ref("");

const model = reactive<TradingAcoounts>({
  broker_id: "",
  platform_id: "",
  server_id: "",
  identity: "",
  secret: "",
  read_only_secret: "",
} as TradingAcoounts);

// Validations Account Details
const schemas = [
  Yup.object().shape({
    market_id: Yup.string().required().label("Market ID"),
  }),
  Yup.object().shape({ broker_id: Yup.string().required().label("Broker ID") }),
  Yup.object().shape({
    platform_id: Yup.string().required().label("Platform ID"),
  }),
  Yup.object().shape({ server_id: Yup.string().required().label("Server ID") }),
  Yup.object().shape(
    {
      identity: Yup.string().required().label("Identity"),
      secret: Yup.string()
        .label("Secret")
        .when("read_only_secret", {
          is: (val: any) => !val,
          then: () =>
            Yup.string().required("Secret Or Read Only Secret Required!"),
        }),
      read_only_secret: Yup.string()
        .label("Read Only Secret")
        .when("secret", {
          is: (val: any) => !val,
          then: () =>
            Yup.string().required("Secret Or Read Only Secret Required!"),
        }),
    },
    ["secret", "read_only_secret"] as any
  ),
];

const currentSchema = computed(() => {
  return schemas[index.value];
});

onMounted(() => {
  nextTick(() => {
    fetchMarkets();
  });
});

const onSubmit = () => {
  emit("submit", model as TradingAcoounts);
};
</script>

<style scoped>
.custom-input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
.custom-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
</style>
