<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <SvgIcon icon="Edit" size="18" color="blue"/>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
 <RouterView />
</template>

<style scoped>

</style>
