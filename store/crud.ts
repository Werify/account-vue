export const useTableStore = () => {
  const loading = ref(true);
  const tableData = ref([]);
  const metas = ref({} as ITableMeta);

  const createPost = async (payload: any) => {
    return await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getPosts = async () => {
    return await useApi("/v1/posts");
  };

  const getTableData = async (endpoint: string, page?: number) => {
    loading.value = true;
    const { data } = await useApi(
      `/v1${endpoint}/${page ? "?page=" + page : ""}`,
      {
        // @ts-ignore
        headers: { Authorization: useCookie("user").value.access_token },
      }
    );
    const res = data as IApiResponse;
    loading.value = false;
    tableData.value = res.results;
    metas.value = res.metas;
  };

  return { createPost, getPosts, getTableData, tableData, loading, metas };
};
