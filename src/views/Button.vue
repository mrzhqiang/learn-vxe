<template>
  <div>
    <h3>基础按钮</h3>
    <basic-button></basic-button>
    <h3>禁用按钮</h3>
    <disable-button></disable-button>
    <h3>加载按钮</h3>
    <loading-button></loading-button>
    <h3>下拉按钮</h3>
    <drop-button></drop-button>
  </div>
</template>

<script>
import BasicButton from "@/components/basicButton";
import DisableButton from "@/components/disableButton";
import LoadingButton from "@/components/loadingButton";
import DropButton from "@/components/dropButton";

export default {
  name: "Button",
  components: {
    DropButton,
    LoadingButton,
    DisableButton,
    BasicButton,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
