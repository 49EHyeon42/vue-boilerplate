<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <v-container fluid class="d-flex justify-center align-center container">
      <div class="d-flex align-center ga-8">
        <v-icon size="128">mdi-alert</v-icon>

        <div class="d-flex flex-column">
          <span class="text-h1 font-weight-bold">404</span>
          <span class="text-h2 font-weight-medium text-grey">PAGE NOT FOUND</span>
        </div>
      </div>
    </v-container>
  </EhLayout2>
</template>

<style scoped>
.container {
  height: 100vh;
}
</style>
