<template>
  <div>
    child
    <button data-test="child-button" @click="handleToParent">click</button>
  </div>
</template>

<script>
export default {
  name: "child",
  methods: {
    handleToParent() {
      this.$emit("to-parent");
    }
  }
};
</script>

<style></style>
