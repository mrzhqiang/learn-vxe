<template>
  <p>
    <vxe-radio-group v-model="value8" :strict="false">
      <vxe-radio label="1" content="支持取消1"></vxe-radio>
      <vxe-radio label="2" content="支持取消2"></vxe-radio>
      <vxe-radio label="3" content="支持取消3"></vxe-radio>
    </vxe-radio-group>
  </p>
</template>

<script>
export default {
  name: "cancelRadioGroup",
  data() {
    return {
      value8: ''
    }
  },
}
</script>

<style scoped>

</style>
