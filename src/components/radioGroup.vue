<template>
  <p>
    <vxe-radio-group v-model="value3">
      <vxe-radio label="1" content="HTML"></vxe-radio>
      <vxe-radio label="2" content="CSS"></vxe-radio>
      <vxe-radio label="3" content="Javascript"></vxe-radio>
      <vxe-radio label="4" content="SASS"></vxe-radio>
      <vxe-radio label="5" content="LESS"></vxe-radio>
    </vxe-radio-group>
  </p>
</template>

<script>
export default {
  name: "radioGroup",
  data() {
    return {
      value3: '3',
    };
  },
}
</script>

<style scoped>

</style>
