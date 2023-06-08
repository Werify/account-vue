export const usePostsStore = () => {
  const { $toast } = useNuxtApp();
  const loading = ref(true);
  const posts = ref<IPosts[]>([]);
  let post = ref<IPosts>({} as IPosts);
  const metas = ref({});

  const createPost = async (payload: any) => {
    return await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const updatePost = async (uuid: string, payload: any) => {
    return await useApi(`/v1/my/posts/${uuid}`, {
      method: "put",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getPosts = (route: string) => {
    useApi(route)
      .then((res) => {
        const response = res.data as IApiResponse;
        loading.value = false;
        posts.value = response.results;
      })
      .catch((err) => {
        loading.value = false;
        $toast.error(err.data.message, { position: "top-right" });
      });
  };

  const getPost = async (slogan: string) => {
    return await useApi(`/v1/posts/${slogan}`);
  };

  const getSinglePost = async (uuid: string) => {
    const { data } = await useApi(`/v1/my/posts/${uuid}`, {
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    });
    // @ts-ignore
    post.value = data.results as IPosts;
  };

  const getMyPosts = async (page?: number) => {
    loading.value = true;
    await useApi(`/v1/my/posts${page ? "?page=" + page : ""}`, {
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    }).then(({ data }: any) => {
      loading.value = false;
      posts.value = data.results;
      metas.value = data.metas;
    });
  };

  return {
    createPost,
    getPosts,
    getPost,
    getMyPosts,
    posts,
    loading,
    metas,
    getSinglePost,
    updatePost,
    post,
  };
};
