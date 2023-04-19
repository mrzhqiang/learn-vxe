<template>
  <p>
    <vxe-radio name="n2" v-model="value2" label="1" content="单选1"></vxe-radio>
    <vxe-radio name="n2" v-model="value2" label="2" content="禁用2" disabled></vxe-radio>
    <vxe-radio name="n2" v-model="value2" label="3" content="单选3"></vxe-radio>
  </p>
</template>

<script>
export default {
  name: "disableRadio",
  data() {
    return {
      value2: '2',
    }
  },
}
</script>

<style scoped>

</style>
