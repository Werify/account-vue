import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
const toast = useToast();
export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast,
    },
  };
});
