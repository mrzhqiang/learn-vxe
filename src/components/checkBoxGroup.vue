<template>
  <p>
    <vxe-checkbox-group v-model="value12">
      <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
      <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
      <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
      <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
      <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
    </vxe-checkbox-group>
  </p>
</template>

<script>
export default {
  name: "checkBoxGroup",
  components: {},
  data() {
    return {
      value12: ['3'],
    }
  }
}
</script>

<style scoped>

</style>
