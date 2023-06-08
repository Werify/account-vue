import {account} from "@werify/account-ts";


export const useAuth = async () => {
  const baseURL = useRuntimeConfig().public.baseUrl;

  const auth = account;
  auth.config.baseURL = baseURL;
  return { auth };
};
