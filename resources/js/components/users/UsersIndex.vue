<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">All Users</h3>
      </div>
      <div
        class="
          px-4
          py-2
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          cursor-pointer
          rounded-lg
        "
      >
        <router-link :to="{ name: 'users.create' }" class="text-sm font-medium"
          >Add User</router-link
        >
      </div>
    </div>
    <index-table
      :columns="columns"
      :rows="users"
      @delete="deleteRow($event)"
      @edit="editRow($event)"
      @view="viewRow($event)"
    ></index-table>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import useUsers from "../../composables/users";
import IndexTable from "../tables/IndexTable";

export default {
  components: {
    IndexTable,
  },
  setup() {
    const { getUsers, users, destroyUser, editUser, viewUser } = useUsers();
    const columns = reactive([
      {
        label: "Name",
        column: "name",
      },
      {
        label: "Email",
        column: "email",
      },
    ]);
    onMounted(() => {
      getUsers();
    });
    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyUser(id);
      await getUsers();
    };
    const editRow = (id) => {
      editUser(id);
    };
    const viewRow = (id) => {
      viewUser(id);
    };

    return {
      users,
      columns,
      deleteRow,
      editRow,
      viewRow,
    };
  },
};
</script>