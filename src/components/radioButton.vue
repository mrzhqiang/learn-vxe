<template>
  <p>
    <vxe-radio-group v-model="value4">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="value5" size="medium">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="value6" size="small" :strict="false">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="value7" size="mini" :strict="false">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
  </p>
</template>

<script>
export default {
  name: "radioButton",
  data() {
    return {
      value4: null,
      value5: null,
      value6: '1',
      value7: '1',
    }
  },
}
</script>

<style scoped>

</style>
