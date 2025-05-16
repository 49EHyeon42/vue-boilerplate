<script setup lang="ts">
const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
</template>

<style scoped></style>
