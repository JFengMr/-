<template>
  <render />
</template>
<script lang="ts" setup>
import { h, resolveComponent } from "vue";
const props = withDefaults(
  defineProps<{
    icon: string;
    size?: number | string;
    color?: string;
  }>(),
  {
    size: 16,
  }
);
const render = () => {
  if (props.icon) {
    return h(
      resolveComponent("el-icon"),
      {
        size: props.size,
        color: props.color,
      },
      () => h(resolveComponent(props.icon))
    );
  } else {
    return h("i");
  }
};
</script>
<style lang="less" scoped></style>
