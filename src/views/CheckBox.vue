<template>
    <div>
      <h3>基础复选框</h3>
      <basic-check-box></basic-check-box>
      <h3>禁用复选框</h3>
      <disable-check-box></disable-check-box>
      <h3>复选框组</h3>
      <check-box-group></check-box-group>
    </div>
</template>

<script lang="js">
import BasicCheckBox from "@/components/basicCheckBox";
import DisableCheckBox from "@/components/disableCheckBox";
import CheckBoxGroup from "@/components/checkBoxGroup";
export default {
  name: 'CheckBox',
  components: {CheckBoxGroup, DisableCheckBox, BasicCheckBox},
  data() {
    return {};
  }
}
</script>
<style scoped>

</style>
