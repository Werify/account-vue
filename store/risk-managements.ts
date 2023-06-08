// import { apiTS } from "@traderfour/api-ts";
export const useRiskStore = () => {
  // const baseURL = useRuntimeConfig().public.baseUrl;
  // const api = apiTS();
  // const posts = useState("posts", () => []);

  // const addPost = () => {
  //   api.myTs.posts.store();
  // };

  const loading = ref(true);
  const results = ref([]);
  const metas = ref({});

  const createRiskManagement = async (payload: any) => {
    return await useApi("/v1/my/financial-engineering/risk-managements", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getMyRiskManagments = async (page?: number) => {
    loading.value = true;
    await useApi(
      `/v1/my/financial-engineering/risk-managements${
        page ? "?page=" + page : ""
      }`,
      {
        // @ts-ignore
        headers: { Authorization: useCookie("user").value.access_token },
      }
    ).then(({ data }) => {
      loading.value = false;
      //@ts-ignore
      results.value = data.results;
      //@ts-ignore
      metas.value = data.metas;
    });
  };

  return {
    createRiskManagement,
    getMyRiskManagments,
    results,
    loading,
    metas,
  };
};
