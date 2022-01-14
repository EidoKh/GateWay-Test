<template>
  <button @click="getSelectedRows()">Get Selected Rows</button>
  <ag-grid-vue
    style="width: 100%; height: 500px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="users"
    rowSelection="multiple"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
  {{ users }}
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import useUsers from "../../composables/users";
import btnCellRenderer from "./btn-cell-renderer.vue";

export default {
  name: "App",
  components: {
    AgGridVue,
    btnCellRenderer,
  },
  setup() {
    const { getUsers, users } = useUsers();
    let columnData = reactive([]);
    onMounted(() => {
      getUsers();
    });

    const columnDefs = reactive([
      {
        field: "athlete",
        cellRenderer: "btnCellRenderer",
        cellRendererParams: {
          //   clicked: function (field) {
          //     alert(`${field} was clicked`);
          //   },
        },
      },
      {
        headerName: "الأسم",
        field: "name",
        sortable: true,
        filter: true,
        checkboxSelection: true,
      },
      {
        headerName: "البريد",
        field: "email",
        sortable: true,
        filter: true,
      },
      {
        headerName: "نوع المستخدم",
        field: "user_type",
        sortable: true,
        filter: true,
      },
    ]);
    let gridApi = ref(null);
    let columnApi = ref(null);

    const onGridReady = (params) => {
      gridApi = params.api;
      columnApi = params.columnApi;
    };

    const getSelectedRows = () => {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      const selectedDataStringPresentation = selectedData
        .map((node) => `${node.make} ${node.model}`)
        .join(", ");
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    };

    return {
      columnDefs,
      onGridReady,
      getSelectedRows,
      users,
    };
  },
};
</script>