<template>
  <p>
    <vxe-checkbox v-model="value9" content="复选1"></vxe-checkbox>
    <vxe-checkbox v-model="value10" content="复选2" disabled></vxe-checkbox>
    <vxe-checkbox v-model="value11" content="自定义值" checked-value="1" unchecked-value="0"></vxe-checkbox>
  </p>
</template>

<script>
export default {
  name: "disableCheckBox",
  components: {},
  data() {
    return {
      value9: true,
      value10: true,
      value11: '1',
    }
  }
}
</script>

<style scoped>

</style>
