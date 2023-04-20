<template>
  <div class="home">
    <h3>图标</h3>
    <icon></icon>
    <h3>基础按钮</h3>
    <basic-button></basic-button>
    <h3>禁用按钮</h3>
    <disable-button></disable-button>
    <h3>加载按钮</h3>
    <loading-button></loading-button>
    <h3>下拉按钮</h3>
    <drop-button></drop-button>
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
import BasicButton from "@/components/basicButton";
import DisableButton from "@/components/disableButton";
import LoadingButton from "@/components/loadingButton";
import DropButton from "@/components/dropButton";
import BasicRadio from "@/components/basicRadio";
import DisableRadio from "@/components/disableRadio";
import RadioGroup from "@/components/radioGroup";
import CancelRadioGroup from "@/components/cancelRadioGroup";
import RadioButton from "@/components/radioButton";
import Icon from '@/components/icon.vue';

export default {
  name: 'home',
  components: {
    Icon,
    RadioButton,
    CancelRadioGroup,
    RadioGroup,
    DisableRadio,
    BasicRadio,
    DropButton,
    LoadingButton,
    DisableButton,
    BasicButton,
  }
}
</script>
