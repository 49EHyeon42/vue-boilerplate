<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <!-- TODO: 모바일은 나중에 -->
    <v-container fluid class="d-flex flex-column align-center justify-start" style="gap: 16px">
      <div class="d-flex align-center" style="gap: 32px">
        <v-avatar size="256">
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <img v-bind="props" src="/home/profile.png" />
            </template>
            부실감자
          </v-tooltip>
        </v-avatar>

        <div class="d-flex flex-column" style="gap: 32px">
          <div class="d-flex align-end" style="gap: 8px">
            <span class="text-h3 font-weight-bold">49EHyeon42</span>
            <span class="text-h6 font-weight-medium text-grey">Noah Jo / 조태현</span>
          </div>

          <div class="d-flex align-center" style="gap: 8px">
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
