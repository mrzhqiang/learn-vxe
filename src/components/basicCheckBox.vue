<template>
  <p>
    <vxe-checkbox v-model="value1" content="默认尺寸"></vxe-checkbox>
    <vxe-checkbox v-model="value2" size="medium" content="中等尺寸"></vxe-checkbox>
    <vxe-checkbox v-model="value3" size="small" content="小型尺寸"></vxe-checkbox>
    <vxe-checkbox v-model="value4" size="mini" content="超小尺寸"></vxe-checkbox>
    <vxe-checkbox v-model="value5" content="默认尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="value6" size="medium" content="中等尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="value7" size="small" content="小型尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="value8" size="mini" content="超小尺寸" indeterminate></vxe-checkbox>
  </p>
</template>

<script>
export default {
  name: "basicCheckBox",
  components: {},
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
    }
  }
}
</script>

<style scoped>

</style>
