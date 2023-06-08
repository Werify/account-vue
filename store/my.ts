export const useMyStore = () => {
  const { $toast } = useNuxtApp();
  const list = ref();
  const loading = ref(true);

  const createItem = async (route: string, payload: any) => {
    return await useApi(route, {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getList = (route: string) => {
    useApi(route)
      .then((res) => {
        const response = res.data as IApiResponse;
        loading.value = false;
        list.value = response.results;
      })
      .catch((err) => {
        loading.value = false;
        $toast.error(err.data.message, { position: "top-right" });
      });
  };

  return { createItem, getList, list, loading };
};
