<template>
  <!-- <GlobalToast message="This is post add page" /> -->
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Post
      </h2>
      <VForm
        :validation-schema="postSchema"
        @keypress.enter.prevent
        @keyup.enter.prevent
        @submit="addPost"
        v-slot="{ meta }"
      >
        <div class="grid gap-4 sm:grid-cols-12 sm:gap-6 items-start">
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <VField
              v-model="postData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>

          <!-- * comments -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="exceprt"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Comments
            </label>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="public"
                  name="comments"
                  :value="19000"
                  class="hidden peer"
                />
                <label for="public" class="radio-button">
                  <span class="w-full">Public</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="private"
                  name="comments"
                  :value="19001"
                  class="hidden peer"
                />
                <label for="private" class="radio-button">
                  <span class="w-full">Private</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="closed"
                  name="comments"
                  :value="19002"
                  class="hidden peer"
                />
                <label for="closed" class="radio-button">
                  <span class="w-full">Closed</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="subscribers"
                  name="comments"
                  :value="19003"
                  class="hidden peer"
                />
                <label for="subscribers" class="radio-button">
                  <span class="w-full">Subscribers</span>
                </label>
              </div>
            </div>
          </div>
          <!-- * comments -->

          <!-- * post type -->
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <select
              v-model="postData.type"
              id="type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
            >
              <option
                v-for="(typeItem, typeIndex) in postTypes"
                :key="typeIndex"
                :value="typeItem.type"
              >
                {{ typeItem.title }}
              </option>
            </select>
          </div>
          <!-- * post type -->

          <!-- * market -->
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Market
            </label>
            <SharedMultiSelectTagging
              v-model="postData.markets"
              :options="markets"
              key="markets"
              :field-name="{
                label: 'name',
                key: 'uuid',
              }"
              :placeholder="'Select Markets'"
            />
          </div>
          <!-- * market -->

          <!-- * platform -->
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Platforms
            </label>
            <SharedMultiSelectTagging
              v-model="postData.platforms"
              key="platforms"
              :options="platforms"
              :field-name="{
                label: 'title',
                key: 'uuid',
              }"
              :placeholder="'Select Platforms'"
            />
          </div>
          <!-- * platform -->

          <!-- * tags -->
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tags
            </label>
            <SharedTagInput key="tags" v-model="postData.tags" />
          </div>
          <!-- * tags -->

          <!-- * Logo & cover -->
          <GlobalImageUploader
            class="md:col-span-4 col-span-full"
            id="logo"
            key="logo"
            lable-idle="Logo here"
            @on-uploaded-successfully="
              ($event) => {
                postData.logo_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />

          <GlobalImageUploader
            class="md:col-span-4 col-span-full"
            id="cover"
            key="cover"
            lable-idle="Cover here"
            @on-uploaded-successfully="
              ($event) => {
                postData.cover_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />

          <GlobalImageUploader
            class="col-span-4"
            id="attachments"
            key="attachments"
            :is-multiple="true"
            lable-idle="attachments here (multiple)"
            @on-uploaded-successfully="
                ($event) => {
                  postData.attachments.push($event.results.uuid as never);
                }
              "
            accepted-file-type="image/jpeg, image/png"
          />
          <!-- * Logo & cover -->

          <div class="col-span-full">
            <Editor v-model="postData.content" />
            <span v-if="hasContentError" class="text-red-700 text-sm">
              Content is Required
            </span>
          </div>
          <!-- * tiny MCE -->
        </div>
        <button
          type="submit"
          class="items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled || !meta.valid"
        >
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Publish Post</span>
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();
import Editor from "@tinymce/tinymce-vue";
import * as Yup from "yup";

const route = useRoute();
const hasContentError = ref(false);
const loadingDisabled = ref(false);
const { getSinglePost, post, updatePost } = usePostsStore();
const router = useRouter();
const { fetchCategories, fetchMarkets, markets, fetchPlatforms, platforms } =
  useMarketStore();

const postData = ref<IPosts>({} as IPosts);

fetchCategories();
fetchMarkets();
fetchPlatforms();
await getSinglePost(route.params.uuid as string);
postData.value = post.value;

const addPost = () => {
  //   for (const key in postData.value) {
  //     if (
  //       // @ts-ignore
  //       postData.value[key] === null ||
  //       // @ts-ignore
  //       postData.value[key] === undefined ||
  //       // @ts-ignore
  //       key === "slogan"
  //     ) {
  //       // @ts-ignore
  //       delete postData.value[key];
  //     }
  //   }
  if (postData.value.content) {
    if (postData.value.markets && postData.value.markets.length >= 1) {
      postData.value.markets = postData.value.markets.map((market: any) => {
        return market["uuid"];
      });
    } else {
      // @ts-ignore
      delete postData.value.markets;
    }

    if (postData.value.platforms && postData.value.platforms.length >= 1) {
      postData.value.platforms = postData.value.platforms.map(
        (platform: any) => {
          return platform["uuid"];
        }
      );
    } else {
      // @ts-ignore
      delete postData.value.platforms;
    }

    if (postData.value.attachments && postData.value.attachments.length < 1) {
      // @ts-ignore
      delete postData.value.attachments;
    }
    loadingDisabled.value = true;
    updatePost(route.params.uuid as string, postData.value)
      .then((res: any) => {
        if (res.data.succeed && res.data.results.uuid) {
          $toast.success("Post Updated Successfully", {
            position: "top-right",
          });
          router.push("/my/posts");
        } else {
          loadingDisabled.value = false;
          hasContentError.value = true;
        }
      })
      .catch((err) => {
        $toast.error(err.data.message, {
          position: "top-right",
        });
        loadingDisabled.value = false;
      });
  } else {
    loadingDisabled.value = false;
    hasContentError.value = true;
  }
};

const postSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
});

const postTypes = [
  {
    title: "Bot",
    type: 13000,
  },
  {
    title: "Indicator",
    type: 13001,
  },
  {
    title: "System",
    type: 13002,
  },
  {
    title: "Script",
    type: 13003,
  },
  {
    title: "Template",
    type: 13004,
  },
  {
    title: "Algorithm",
    type: 13005,
  },
  {
    title: "Artificial Intelligence",
    type: 13006,
  },
  {
    title: "Portfolio",
    type: 13007,
  },
  {
    title: "Ai Live",
    type: 13008,
  },
  {
    title: "Funded Account",
    type: 13009,
  },
  {
    title: "Trading Signal",
    type: 13010,
  },
  {
    title: "Trading Strategy",
    type: 13011,
  },
  {
    title: "Course",
    type: 13012,
  },
  {
    title: "Video",
    type: 13013,
  },
  {
    title: "Article",
    type: 13014,
  },
  {
    title: "Podcast",
    type: 13015,
  },
  {
    title: "Short Video",
    type: 13016,
  },
  {
    title: "Data",
    type: 13017,
  },
  {
    title: "Moel",
    type: 13018,
  },
  {
    title: "Live Stream",
    type: 13019,
  },
  {
    title: "Other",
    type: 13020,
  },
];
</script>

<style>
.tox-notifications-container {
  display: none;
}
.radio-button {
  @apply inline-flex items-center justify-center w-full px-4 py-2 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700;
}
</style>
