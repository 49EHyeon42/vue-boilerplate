<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from 'vue';

const count = ref(0);

// 1.
watchSyncEffect(() => {
  console.log('watchSyncEffect - count:', count.value);
});

// 2.
watchEffect(() => {
  console.log('watchEffect - count:', count.value);
});

// 3.
watch(count, (newVal, oldVal) => {
  console.log('watch - count:', oldVal, '→', newVal);
});

// 5.
watchPostEffect(() => {
  console.log('watchPostEffect - count:', count.value);
});

onBeforeMount(() => console.log('1. onBeforeMount'));
onMounted(() => console.log('2. onMounted'));

// 4.
onBeforeUpdate(() => console.log('3-1. onBeforeUpdate: count 감지'));
// 6.
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
