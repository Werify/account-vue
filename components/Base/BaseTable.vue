<template>
  <section class="bg-gray-50 dark:bg-gray-900 antialiased rounded">
    <div class="mx-auto">
      <div
        class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded overflow-hidden"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
        >
          <div class="flex-1 flex items-center space-x-2">
            <h5>
              <span class="dark:text-white font-bold text-xl">{{
                props.title
              }}</span>
            </h5>
            <h5 class="text-gray-500 dark:text-gray-400 ml-1 rtl:mr-1">
              ({{ metas.last_page * metas.per_page }})
            </h5>
          </div>
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
          >
            <NuxtLink :to="props.endpoint + tableButton.link">
              <button
                class="flex items-center rtl:mr-2 ml-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <Icon name="mdi:plus" class="me-1" size="16px" />
                {{ tableButton.text }}
              </button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4"
        ></div>
        <BaseTableSkeleton v-if="loading" />

        <div v-else class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr v-if="tableData.length >= 1">
                <th
                  v-for="item in props.headerFilters"
                  :key="item.key"
                  scope="col"
                  class="p-4"
                >
                  {{ item.text }}
                </th>
                <th scope="col" class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="tableData.length >= 1">
                <tr
                  v-for="(tableTr, tableTrIndex) in tableItems"
                  :key="`tr-${tableTrIndex}`"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td class="w-4 p-4" v-for="key in Object.keys(tableTr)">
                    <img
                      v-if="key == 'logo'"
                      :src="`${
                        tableTr[key] !== null && tableTr[key] != ''
                          ? tableTr[key]
                          : 'https://s.trader4.net/defaults/posts/logo.png'
                      }`"
                      class="w-10 h-10 rounded-full"
                    />
                    <span v-else-if="key === 'uuid'"></span>
                    <span v-else>{{ tableTr[key] }}</span>
                  </td>

                  <td class="w-4 p-4">
                    <div class="flex w-4 items-center space-x-3">
                      <button
                        class="bg-red-500 hover:bg-red-700 px-4 py-2 text-white rounded flex items-center"
                      >
                        <Icon name="mdi:bin" size="16px" class="me-1" />
                        Delete
                      </button>
                      <NuxtLink
                        :to="`${props.endpoint}${tableTr.uuid}`"
                        class="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded flex items-center"
                      >
                        <Icon name="mdi:pencil" size="16px" class="me-1" />
                        Edit
                      </NuxtLink>
                    </div>
                  </td>
                </tr>
              </template>

              <tr v-else class="text-center text-lg">
                No data found
              </tr>
            </tbody>
          </table>
        </div>
        <BaseTablePagination
          :currentPage="metas.current_page"
          :totalPages="metas.last_page"
          :perPage="metas.per_page"
          @on-change-page="fetchTable($event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { loading, getTableData, tableData, metas } = useTableStore();
const tableItems = ref<any>([]);

const props = defineProps<{
  endpoint: string;
  tableButton: { text: string; link: string };
  headerFilters: ITableHeaderItem[];
  title: string;
}>();

props.headerFilters.push({ key: "uuid" });

const fetchTable = async (page?: number) => {
  tableData.value = [];
  tableItems.value = [];
  await getTableData(props.endpoint, page);
  tableData.value.forEach((tableItem: any) => {
    //@TODO: Fix performance issue
    let dataItems: string[] = [];
    props.headerFilters.forEach((filterItem: ITableHeaderItem | any) => {
      if (
        Object.keys(tableItem).includes(filterItem.key) &&
        tableItem[filterItem.key] !== null
      ) {
        dataItems[filterItem.key] = tableItem[filterItem.key];
      } else {
        dataItems[filterItem.key] = "";
      }
    });
    tableItems.value.push(dataItems);
  });
};

fetchTable();
</script>
