<template>
  <div>
    <section>
      <div class="grid py-10 mx-auto lg:py-16 grid-cols-12 items-center">
        <div
          class="lg:col-span-6 col-span-full md:max-w-lg w-full mx-auto rounded"
        >
          <div
            class="p-6 space-y-4 bg-white dark:bg-transparent lg:space-y-6 sm:p-8"
          >
            <div
              id="toast-success"
              class="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">
                Verification code has been sent.
              </div>
              <div class="flex items-center ml-auto space-x-2">
                <a
                  target="_blank"
                  class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700"
                  :href="gmailLink"
                  >Open Gmail</a
                >
              </div>
            </div>

            <h1
              class="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl dark:text-white"
            >
              Confirm
            </h1>
            <VForm
              class="space-y-4 lg:space-y-6"
              @submit="loginUser"
              :validation-schema="schema"
            >
              <p v-if="responseMsg" :class="responseStatus">
                {{ responseMsg }}
              </p>
              <div>
                <label
                  for="code"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Verification Code</label
                >
                <VField
                  v-model="code"
                  type="number"
                  name="code"
                  id="code"
                  placeholder="For Example, 413850"
                  autofocus
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <VErrorMessage class="text-red-700 text-sm" name="code" />
              </div>
              <button
                :disabled="loadingDisabled"
                type="submit"
                class="w-full text-white !bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
              >
                <Icon
                  v-if="loadingDisabled"
                  class="animate-spin"
                  size="1.5rem"
                  name="mdi:loading"
                />
                <span v-else>Login to Account</span>
              </button>
            </VForm>
          </div>
        </div>
        <div class="lg:col-span-6 lg:flex hidden justify-center">
          <client-only>
            <Vue3Lottie
              animationLink="https://assets10.lottiefiles.com/packages/lf20_zl2c0cuv.json"
              :height="200"
              :width="200"
            />
          </client-only>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Imports
import * as Yup from "yup";
import { saveToken } from "~/composables/JwtService";
import { Vue3Lottie } from "vue3-lottie";
import {IVerifyOtpPayload} from "@werify/account-ts/dist/modules/login/otp/types";

// Variables
const responseMsg = ref("");
const responseHasError = ref(false);
const code = ref("");
const loadingDisabled = ref(false);
let OTPPayload = JSON.parse(
  localStorage.getItem("OTPPayload") as string
) as IVerifyOtpPayload;
const gmailLink =
  "https://mail.google.com/mail/u/" +
  // @ts-ignore
  OTPPayload.user.identifier +
  "/#search/from:no-reply@werify.net";
console.log(gmailLink);
// Login User
const loginUser = async () => {
  loadingDisabled.value = true;

  // Otp payload
  OTPPayload.otp = code.value;

  // Verify OTP WERIFY
  const { auth } = await useAuth();
  auth
    .verifyOTP(OTPPayload, "/v1/account/verify-otp")
    .then((res) => {
      if (res.succeed) {
        localStorage.removeItem("OTPPayload");
        // localStorage.setItem(
        //   "token",
        //   `${res.results.token_type} ${res.results.access_token}`
        // );
        // saveToken(JSON.stringify(res.results));
        useCookie("user", { secure: true }).value = JSON.stringify(res.results);
        location.replace("/my/");
      }
    })
    .catch(() => {
      responseMsg.value =
        "Something went wrong Please Check your code & try again";
      responseHasError.value = true;
      loadingDisabled.value = false;
    });
};

// Error and success message Class
const responseStatus = computed(() => {
  return `text-${responseHasError.value ? "red" : "green"}-600 dark:text-${
    responseHasError.value ? "red" : "green"
  }-400`;
});

const schema = Yup.object({
  code: Yup.number()
    .required("Seems you even not entered verify code, not sure?, Contact Us.")
    .typeError("Confirm code should look like 413850, not sure?, Contact Us."),
});
</script>
