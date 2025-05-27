<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

const count = ref(0);

onBeforeMount(() => console.log('1. onBeforeMount'));
onMounted(() => console.log('2. onMounted'));

onBeforeUpdate(() => console.log('3-1. onBeforeUpdate: count 감지'));
onUpdated(() => console.log('3-2. onUpdated: count 감지'));

onBeforeUnmount(() => console.log('4. onBeforeUnmount'));
onUnmounted(() => console.log('5. onUnmounted'));
</script>

<template>
  <h1>Life Cycle View</h1>

  <p>{{ count }}</p>
  <button @click="count++">증가</button>
</template>

<style scoped></style>
