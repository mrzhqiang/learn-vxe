<template>
  <div>
    <h3>基础单选框</h3>
    <basic-radio></basic-radio>
    <h3>禁用单选框</h3>
    <disable-radio></disable-radio>
    <h3>单选组</h3>
    <radio-group></radio-group>
    <h3>支持取消</h3>
    <cancel-radio-group></cancel-radio-group>
    <h3>单选按钮</h3>
    <radio-button></radio-button>
  </div>
</template>

<script>
import RadioButton from "@/components/radioButton";
import CancelRadioGroup from "@/components/cancelRadioGroup";
import RadioGroup from "@/components/radioGroup";
import DisableRadio from "@/components/disableRadio";
import BasicRadio from "@/components/basicRadio";

export default {
  name: "Radio",
  components: {
    RadioButton,
    CancelRadioGroup,
    RadioGroup,
    DisableRadio,
    BasicRadio,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
