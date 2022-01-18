<template>
  <div class="w-100 text-right pt-6 px-6">
    <h3 class="text-xl">تعديل معلومات المستخدم</h3>
  </div>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveUser">
    <div class="flex flex-col text-right">
      <label for="title" class="">الأسم</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="user.name"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>
    <div class="flex flex-col text-right">
      <label for="email" class="">البريد الالكتروني</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        v-model="user.email"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>
    <div class="flex flex-col text-right">
      <label for="password" class="">كلمة السر</label>
      <input
        type="password"
        name="password"
        id="password"
        autocomplete="new-password"
        v-model="user.password"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>
    <div class="flex flex-col text-right">
      <label for="phone" class="">الهاتف</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        v-model="user.phone"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>
    <div class="flex flex-col text-right">
      <label for="location" class="">العنوان</label>
      <input
        type="text"
        name="location"
        id="location"
        v-model="user.location"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>

    <div class="md:flex w-100 text-right">
      <div class="md:w-1/2 w-full">
        <label for="user_type" class="">نوع المساخدم</label>
        <select
          name="user_type"
          id="user_type"
          v-model="user.user_type"
          class="
            mt-2
            py-3
            w-full
            px-3
            rounded-lg
            bg-white
            dark:bg-gray-800
            border border-gray-400
            dark:border-gray-700
            text-gray-800
            dark:text-gray-50
            font-semibold
            focus:border-blue-500 focus:outline-none
            text-right
          "
        >
          <option value="s">مشترك</option>
          <option value="a">مدير</option>
        </select>
      </div>
      <div class="md:w-1/2 w-full">
        <label for="status" class="">الحالة</label>
        <select
          name="status"
          id="status"
          v-model="user.status"
          class="
            mt-2
            w-full
            py-3
            px-3
            rounded-lg
            bg-white
            dark:bg-gray-800
            border border-gray-400
            dark:border-gray-700
            text-gray-800
            dark:text-gray-50
            font-semibold
            focus:border-blue-500 focus:outline-none
            text-right
          "
        >
          <option value="a">نشط</option>
          <option value="d">غير نشط</option>
        </select>
      </div>
    </div>
    {{ imagePreview }}
    <div>
      <div
        class="flex w-full justify-end mt-2"
        v-if="user.user_image != undefined"
      >
        <img
          :src="
            imagePreview != null
              ? imagePreview
              : URL + 'images/users_images/' + user.user_image
          "
          alt=""
          class="figure-img img-fluid rounded"
          style="max-height: 100px"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="
            w-100
            mt-2
            py-3
            px-3
            rounded-lg
            bg-white
            dark:bg-gray-800
            border border-gray-400
            dark:border-gray-700
            text-gray-800
            dark:text-gray-50
            font-semibold
            focus:border-blue-500 focus:outline-none
            text-right
            hidden
          "
          @change="onFileSelected"
          type="file"
          id="user-image"
        />
        <label for="user-image" class="text-right w-100 flex justify-end"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            /></svg
        ></label>
      </div>
    </div>

    <button
      type="submit"
      class="
        md:w-32
        bg-blue-600
        dark:bg-gray-100
        text-white
        dark:text-gray-800
        font-bold
        py-3
        px-6
        rounded-lg
        mt-4
        hover:bg-blue-500
        dark:hover:bg-gray-200
        transition
        ease-in-out
        duration-300
      "
    >
      حفظ
    </button>
  </form>
</template>
<script>
import useUsers from "../../composables/users";
import useLookups from "../../composables/lookups";
import { onMounted, reactive, ref } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { user, getUser, updateUser } = useUsers();
    const { URL } = useLookups();

    onMounted(() => {
      getUser(props.id);
    });

    const saveUser = async () => {
      await updateUser(props.id, { form: user.value, file });
    };
    let file = reactive(null);
    let imagePreview = ref(null);

    function onFileSelected(event) {
      file = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        imagePreview.value = event.target.result;
      };
    }

    return {
      user,
      saveUser,
      URL,
      onFileSelected,
      imagePreview,
    };
  },
};
</script>
