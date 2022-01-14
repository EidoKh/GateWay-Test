<template>
  <span>
    <button @click="btnClickedHandler()">Click me!</button>
  </span>
</template>
<script>
export default {
  setup() {
    function btnClickedHandler() {
      params.clicked(params.value);
    }

    return {
      btnClickedHandler,
    };
  },
};
</script>
