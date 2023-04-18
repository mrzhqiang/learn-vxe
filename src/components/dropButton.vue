<template>
  <div>
    <p>
      <vxe-button transfer>
        <template #default>默认颜色</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="primary" transfer>
        <template #default>主要颜色</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text" status="primary">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="success" transfer>
        <template #default>成功颜色</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text" status="success">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="info" transfer>
        <template #default>信息颜色</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text" status="my-purple">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="warning" transfer placement="top">
        <template #default>固定向上</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text" status="warning">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="danger" transfer placement="bottom">
        <template #default>固定向下</template>
        <template #dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text" status="danger">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
    </p>

    <p>
      <vxe-button size="mini" content="超小下拉按钮">
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" status="primary" content="下拉按钮2"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="small" content="小型下拉按钮">
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" status="success" content="下拉按钮2"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="medium" content="固定向上" placement="top">
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" status="warning" content="下拉按钮2"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button content="固定向下" placement="bottom">
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" status="danger" content="下拉按钮2"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "dropButton"
}
</script>

<style scoped>

</style>
