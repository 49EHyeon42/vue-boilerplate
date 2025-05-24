<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="d-flex align-center cursor-pointer brand-gap" @click="router.push('/')">
    <v-icon size="32">mdi-debian</v-icon>
    <span class="text-h6">49EHyeon42</span>
  </div>
</template>

<style scoped>
.brand-gap {
  gap: 8px;
}
</style>
