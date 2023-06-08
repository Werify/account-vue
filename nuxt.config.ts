// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@zadigetvoltaire/nuxt-gtm",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VForm",
          Field: "VField",
          FieldArray: "VFieldArray",
          ErrorMessage: "VErrorMessage",
        },
      },
    ],
  ],
  gtm: {
    id: "GTM-TFRSSPC",
    defer: true,
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },

  extends: [
    "base-layers", // Extend from a local directory
  ],
});
