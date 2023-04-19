<template>
    <p>
      <vxe-radio name="n1" v-model="value1" label="1" content="默认尺寸"></vxe-radio>
      <vxe-radio name="n1" v-model="value1" label="2" content="中等尺寸" size="medium"></vxe-radio>
      <vxe-radio name="n1" v-model="value1" label="3" content="小型尺寸" size="small"></vxe-radio>
      <vxe-radio name="n1" v-model="value1" label="4" content="超小尺寸" size="mini"></vxe-radio>
    </p>
</template>

<script>
export default {
  name: "basicRadio",
  data() {
    return {
      value1: null,
    }
  }
}
</script>

<style scoped>

</style>
