export const useMarketStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states
  const categories = useState<ICategory[]>("categories", () => []);
  const markets = useState<IMarkets[]>("markets", () => []);
  const platforms = useState<IPlatforms[]>("platforms", () => []);
  const filterdPlatforms = useState<IPlatforms[]>("filterdPlatforms", () => []);
  const brokers = useState<IBroker[]>("brokers", () => []);
  const filterdBrokers = useState<IBroker[]>("brokers", () => []);
  const filterdServers = useState<IServers[]>("filterdServers", () => []);

  //getters

  //actions
  const fetchCategories = async () => {
    const { data }: { data: any } = await useApi("/v1/categories");
    categories.value = data?.results as ICategory[];
  };

  const fetchMarkets = async () => {
    const { data }: { data: any } = await useApi("/v1/market/markets");
    markets.value = data?.results as IMarkets[];
  };

  const fetchPlatforms = async () => {
    const { data }: { data: any } = await useApi("/v1/market/platforms");
    platforms.value = data?.results as IPlatforms[];
  };

  const fetchBrokers = async () => {
    const { data }: { data: any } = await useApi("/v1/market/brokers");
    brokers.value = data?.results as IBroker[];
  };

  const fetchFilterdBrokers = async (marketId: string) => {
    const { data }: { data: any } = await useApi(
      `/v1/market/brokers?${marketId}`
    );
    filterdBrokers.value = data?.results as IBroker[];
  };

  const fetchFilterdPlatforms = async (brokerId: string) => {
    const { data }: { data: any } = await useApi(
      `/v1/market/brokers/${brokerId}/platforms`
    );
    filterdPlatforms.value = data?.results as IPlatforms[];
  };

  const fetchFilterdServers = async (brokerId: string, platformId: string) => {
    const { data }: { data: any } = await useApi(
      `/v1/market/brokers/${brokerId}/servers?platform_id=${platformId}`
    );
    filterdServers.value = data?.results as IServers[];
  };

  return {
    categories,
    fetchCategories,
    markets,
    fetchMarkets,
    platforms,
    fetchPlatforms,
    brokers,
    fetchBrokers,
    fetchFilterdBrokers,
    filterdBrokers,
    filterdPlatforms,
    fetchFilterdPlatforms,
    fetchFilterdServers,
    filterdServers,
  };
};
