<template>
  <div>
    <p>
      <vxe-button content="默认颜色"></vxe-button>
      <vxe-button status="primary" content="主要颜色"></vxe-button>
      <vxe-button status="success" content="成功颜色"></vxe-button>
      <vxe-button status="info" content="信息颜色"></vxe-button>
      <vxe-button status="warning" content="警告颜色"></vxe-button>
      <vxe-button status="danger" content="危险颜色"></vxe-button>
    </p>
    <p>
      <vxe-button content="默认尺寸"></vxe-button>
      <vxe-button size="medium" content="中等尺寸"></vxe-button>
      <vxe-button size="small" content="小型尺寸"></vxe-button>
      <vxe-button size="mini" content="超小尺寸"></vxe-button>
    </p>
    <p>
      <vxe-button type="text" content="默认颜色"></vxe-button>
      <vxe-button type="text" status="primary" content="主要颜色"></vxe-button>
      <vxe-button type="text" status="success" content="信息颜色"></vxe-button>
      <vxe-button type="text" status="info" content="信息颜色"></vxe-button>
      <vxe-button type="text" status="warning" content="警告颜色"></vxe-button>
      <vxe-button type="text" status="danger" content="危险颜色"></vxe-button>
    </p>
    <p>
      <vxe-button round>圆角按钮</vxe-button>
      <vxe-button loading round>圆角按钮</vxe-button>
      <vxe-button status="primary" round>主要颜色</vxe-button>
      <vxe-button status="success" round>成功颜色</vxe-button>
      <vxe-button status="info" round>信息颜色</vxe-button>
      <vxe-button status="warning" round>警告颜色</vxe-button>
      <vxe-button status="danger" round>危险颜色</vxe-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "basicButton"
}
</script>

<style scoped>

</style>
