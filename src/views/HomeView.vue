<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <!-- TODO: 모바일은 나중에 -->
    <v-container fluid class="d-flex flex-column align-center justify-start ga-4">
      <div class="d-flex align-center ga-8">
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-avatar v-bind="props" image="/home/profile.png" size="256" />
          </template>
          부실감자
        </v-tooltip>

        <div class="d-flex flex-column ga-8">
          <div class="d-flex align-end ga-2">
            <span class="text-h3 font-weight-bold">49EHyeon42</span>
            <span class="text-h6 font-weight-medium text-grey">Noah Jo / 조태현</span>
          </div>

          <div class="d-flex align-center ga-2">
            <v-chip href="mailto:49ehyeon42@email.com" target="_blank" prepend-icon="mdi-email">
              Email
            </v-chip>
            <v-chip href="https://github.com/49EHyeon42" target="_blank" prepend-icon="mdi-github">
              GitHub
            </v-chip>
          </div>
        </div>
      </div>

      <div class="text-h2 font-weight-bold slogan-text">
        <p>Dream. Believe. Achieve.</p>
        <p>Show and Prove.</p>
      </div>
    </v-container>
  </EhLayout2>
</template>

<style scoped>
.slogan-text {
  font-family: 'Charm';
}
</style>
