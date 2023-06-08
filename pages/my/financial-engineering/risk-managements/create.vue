<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Risk Management Plan
      </h2>
      <VForm :validation-schema="riskSchema" @submit="addRisk">
        <div class="grid gap-4 sm:grid-cols-12 sm:gap-6 items-start">
          <div class="col-span-full">
            <GlobalTooltip id="title" text="Title" />
            <div class="flex">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <Icon
                data-tooltip-target="title"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <VField
              v-model="riskData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-3/6 focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip text="Max Risk" id="max_risk" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max Risk
              </label>
              <Icon
                data-tooltip-target="max_risk"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

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
            <GlobalTooltip text="Max Risk Mode" id="risk_mode" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Risk Mode</label
              >
              <Icon
                data-tooltip-target="risk_mode"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.max_risk_mode"
              class="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Max Risk Mode"
            >
              <option
                v-for="(riskMode, riskIndex) in MAX_RISK_MODE"
                :key="riskIndex"
                :value="riskMode.type"
              >
                {{ riskMode.title }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip text="Max Risk Calculation" id="risk_calculation" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Risk Calculation</label
              >
              <Icon
                data-tooltip-target="risk_calculation"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.max_risk_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Max Risk calculation"
            >
              <option
                v-for="(risktype, riskIndex) in MAX_RISK_CALCULATION"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-2 col-span-full">
            <GlobalTooltip text="Max Risk Relative" id="risk_relative" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Risk Relative
              </label>
              <Icon
                data-tooltip-target="risk_relative"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="riskData.is_max_risk_relative"
                  type="radio"
                  id="active"
                  :value="true"
                  class="hidden peer"
                />
                <label for="active" class="radio-button">
                  <span class="w-full">Active</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="riskData.is_max_risk_relative"
                  type="radio"
                  id="inactive"
                  :value="false"
                  class="hidden peer"
                />
                <label for="inactive" class="radio-button">
                  <span class="w-full">Inactive</span>
                </label>
              </div>
            </div>
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <div class="flex">
              <GlobalTooltip text="Max Daily Risk" id="daily_risk" />
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max Daily Risk
              </label>
              <Icon
                data-tooltip-target="daily_risk"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

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
            <GlobalTooltip id="daily_risk_mode" text="Max Daily Risk Mode" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Daily Risk Mode</label
              >
              <Icon
                data-tooltip-target="daily_risk_mode"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.max_daily_risk_mode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max daily risk mode"
            >
              <option
                v-for="(risktype, riskIndex) in MAX_DAILY_RISK_MODE"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <div class="flex">
              <GlobalTooltip
                id="daily_risk_calculation"
                text="Max Daily Risk Calculation"
              />
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Max Daily Risk Calculation</label
              >
              <Icon
                data-tooltip-target="daily_risk_calculation"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.max_daily_risk_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="max daily risk calculation"
            >
              <option
                v-for="(risktype, riskIndex) in MAX_DAILY_RISK_CALCULATION"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full"></div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="daily_per_chart" text="Risk Per Chart" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Risk Per Chart
              </label>
              <Icon
                data-tooltip-target="daily_per_chart"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

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
            <div class="flex">
              <GlobalTooltip
                id="daily_per_chart_mode"
                text="Risk Per Chart Mode"
              />
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Risk Per Chart Mode</label
              >
              <Icon
                data-tooltip-target="daily_per_chart_mode"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.risk_per_chart_mode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per chart mode"
            >
              <option
                v-for="(risktype, riskIndex) in RISK_PER_CHART_MODE"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip
              id="daily_per_chart_calculation"
              text="Risk Per Chart Calculation"
            />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Risk Per Chart Calculation</label
              >
              <Icon
                data-tooltip-target="daily_per_chart_calculation"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.risk_per_chart_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per chart calculation"
            >
              <option
                v-for="(risktype, riskIndex) in RISK_PER_CHART_CALCULATION"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="daily_per_trade" text="Risk Per Trade" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Risk Per Trade
              </label>
              <Icon
                data-tooltip-target="daily_per_trade"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

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
            <GlobalTooltip
              id="daily_per_trade_mode"
              text="Risk Per Trade Mode"
            />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Risk Per Trade Mode</label
              >
              <Icon
                data-tooltip-target="daily_per_trade_mode"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.risk_per_trade_mode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per trade mode"
            >
              <option
                v-for="(risktype, riskIndex) in RISK_PER_TRADE_MODE"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip
              id="risk_trade_calculation"
              text="Risk Per Trade Calculation"
            />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Risk Per Trade Calculation</label
              >
              <Icon
                data-tooltip-target="risk_trade_calculation"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.risk_per_trade_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk per trade calculation"
            >
              <option
                v-for="(risktype, riskIndex) in RISK_PER_TRADE_CALCULATION"
                :key="riskIndex"
                :value="risktype.type"
              >
                {{ risktype.title }}
              </option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="risk_reward_ratio" text="Risk Reward Ratio" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Risk Reward Ratio</label
              >
              <Icon
                data-tooltip-target="risk_reward_ratio"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.risk_reward_ratio"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="risk reward ratio"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="positive" text="Positive Correlation" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Positive Correlation
              </label>
              <Icon
                data-tooltip-target="positive"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.positive_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="positive correlation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="negative" text="Negative Correlation" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Negative Correlation</label
              >
              <Icon
                data-tooltip-target="negative"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.negative_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="negative correlation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="low" text="Low Correlation" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Low Correlation</label
              >
              <Icon
                data-tooltip-target="low"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.low_correlation"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="low correlation"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="hedge" text="Hedge" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Hedge
              </label>
              <Icon
                data-tooltip-target="hedge"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="riskData.hedge"
                  type="radio"
                  name="hedge"
                  id="active_hedge"
                  :value="true"
                  class="hidden peer"
                />
                <label for="active_hedge" class="radio-button">
                  <span class="w-full">Active</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="riskData.hedge"
                  type="radio"
                  name="hedge"
                  id="inactive_hedge"
                  :value="false"
                  class="hidden peer"
                />
                <label for="inactive_hedge" class="radio-button">
                  <span class="w-full">Inactive</span>
                </label>
              </div>
            </div>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="news" text="News Trading" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >News Trading</label
              >
              <Icon
                data-tooltip-target="news"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.news_trading"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="news trading"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="stop_loss" text="Stop Loss" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Stop Loss
              </label>
              <Icon
                data-tooltip-target="stop_loss"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="riskData.required_stop_loss"
                  type="radio"
                  name="required_stop_loss"
                  id="active_stop-loss"
                  :value="true"
                  class="hidden peer"
                />
                <label for="active_stop-loss" class="radio-button">
                  <span class="w-full">Active</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="riskData.required_stop_loss"
                  type="radio"
                  name="required_stop_loss"
                  id="inactive_stop_loss"
                  :value="false"
                  class="hidden peer"
                />
                <label for="inactive_stop_loss" class="radio-button">
                  <span class="w-full">Inactive</span>
                </label>
              </div>
            </div>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="profit" text="Target Profit" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Target Profit
              </label>
              <Icon
                data-tooltip-target="profit"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="riskData.required_target_profit"
                  type="radio"
                  name="required_target_profit"
                  id="active_target_profit"
                  :value="true"
                  class="hidden peer"
                />
                <label for="active_target_profit" class="radio-button">
                  <span class="w-full">Active</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="riskData.required_target_profit"
                  type="radio"
                  name="required_target_profit"
                  id="inactive_target_profit"
                  :value="false"
                  class="hidden peer"
                />
                <label for="inactive_target_profit" class="radio-button">
                  <span class="w-full">Inactive</span>
                </label>
              </div>
            </div>
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="instrument" text="Allowed Instruments" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Allowed Instruments</label
              >
              <Icon
                data-tooltip-target="instrument"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.allowed_instruments"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed instruments"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full"></div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="times" text="Allowed Times" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Allowed Times</label
              >
              <Icon
                data-tooltip-target="times"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.allowed_times"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed times"
            />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="order_types" text="Allowed Order Types" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Allowed Order Types</label
              >
              <Icon
                data-tooltip-target="order_types"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <input
              v-model="riskData.allowed_order_types"
              type="number"
              max="100"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="allowed order types"
            />
          </div>

          <div class="w-full lg:col-span-3 col-span-full">
            <GlobalTooltip id="trading_accounts" text="Trading Accounts" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Trading Accounts</label
              >
              <Icon
                data-tooltip-target="trading_accounts"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <select
              v-model="riskData.tradingAccount"
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
            <GlobalTooltip id="public" text="Public" />
            <div class="flex">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Public
              </label>
              <Icon
                data-tooltip-target="public"
                name="mdi-help-circle-outline"
                class="w-4 h-4 ms-2 cursor-pointer"
              />
            </div>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="riskData.public"
                  type="radio"
                  name="public"
                  id="public"
                  :value="true"
                  class="hidden peer"
                />
                <label for="public" class="radio-button">
                  <span class="w-full">Public</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="riskData.public"
                  type="radio"
                  name="private"
                  id="private"
                  :value="false"
                  class="hidden peer"
                />
                <label for="private" class="radio-button">
                  <span class="w-full">Private</span>
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
import * as Yup from "yup";

import { useRiskStore } from "~/store/risk-managements";
const router = useRouter();
const { fetchAccounts, tradingAccounts } = useTradingStore();
onMounted(() => {
  nextTick(() => {
    fetchAccounts();
  });
});
console.log(tradingAccounts);
const riskData = ref({
  title: undefined,
  max_risk: undefined,
  max_risk_mode: 30000,
  max_risk_calculation: 30010,
  is_max_risk_relative: false,
  max_daily_risk: undefined,
  max_daily_risk_mode: 30020,
  max_daily_risk_calculation: 30030,

  risk_per_chart: undefined,
  risk_per_chart_mode: 30060,

  risk_per_chart_calculation: 30070,

  risk_per_trade: undefined,
  risk_per_trade_mode: 30080,

  risk_per_trade_calculation: 30090,
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
  tradingAccount: [],
});
const MAX_RISK_MODE = [
  {
    title: "Balance",
    type: 30000,
  },
  {
    title: "Equity",
    type: 30001,
  },
];
const MAX_RISK_CALCULATION = [
  {
    title: "Percentage",
    type: 30010,
  },
  {
    title: "Amount",
    type: 30011,
  },
  {
    title: "Lots",
    type: 30012,
  },
];
const MAX_DAILY_RISK_MODE = [
  {
    title: "Balance",
    type: 30020,
  },
  {
    title: "Equity",
    type: 30021,
  },
];

const MAX_DAILY_RISK_CALCULATION = [
  {
    title: "Percentage",
    type: 30030,
  },
  {
    title: "Amount",
    type: 30031,
  },
  {
    title: "Lots",
    type: 30032,
  },
];

const RISK_PER_CHART_MODE = [
  {
    title: "Balance",
    type: 30060,
  },
  {
    title: "Equity",
    type: 30061,
  },
];
const RISK_PER_CHART_CALCULATION = [
  {
    title: "Percentage",
    type: 30070,
  },
  {
    title: "Amount",
    type: 30071,
  },
  {
    title: "Lots",
    type: 30072,
  },
];
const RISK_PER_TRADE_MODE = [
  {
    title: "Balance",
    type: 30080,
  },
  {
    title: "Equity",
    type: 30081,
  },
];
const RISK_PER_TRADE_CALCULATION = [
  {
    title: "Percentage",
    type: 30090,
  },
  {
    title: "Amount",
    type: 30091,
  },
  {
    title: "Lots",
    type: 30092,
  },
];

const loadingDisabled = ref(false);
const store = useRiskStore();
const addRisk = () => {
  if (riskData.value) {
    loadingDisabled.value = true;
    store.createRiskManagement(riskData.value).then((res: any) => {
      if (res.data.succeed && res.data.results.uuid) {
        //@ts-ignore
        $toast.success("Created Successfully", {
          position: "top-right",
        });
      } else {
        loadingDisabled.value = false;
      }
      loadingDisabled.value = false;
    });
    router.push("/my/financial-engineering/risk-managements").catch((err) => {
      $toast.error(err.data.message.toString(), {
        position: "top-right",
      });
      loadingDisabled.value = false;
    });
  } else {
    loadingDisabled.value = false;
  }
};

// Form Validation
const riskSchema = Yup.object({
  // title: Yup.string().required("Title is Required"),
  // max_risk: Yup.string().required("Max Risk is Required"),
  // max_daily_risk: Yup.string().required("Max Daily Risk is Required"),
  // risk_per_chart: Yup.string().required("Risk Per Chart is Required"),
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
