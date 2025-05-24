<script setup lang="ts">
const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <!-- TODO: app, temporary 확인 -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-container class="d-flex align-center">
      <v-icon icon="mdi-debian" size="x-large" class="mr-2" />
      <span class="text-h6">49EHyeon42</span>
    </v-container>

    <v-list density="compact" class="m-0">
      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-home</v-icon>
          <span class="text-subtitle-2">Home</span>
        </div>
      </v-list-item>
      <v-list-item to="/about">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-account</v-icon>
          <span class="text-subtitle-2">About</span>
        </div>
      </v-list-item>

      <v-list-group>
        <template #activator="{ props }">
          <v-list-item v-bind="props">
            <div class="d-flex align-center">
              <v-icon class="mr-2">mdi-folder</v-icon>
              <span class="text-subtitle-2">Projects</span>
            </div>
          </v-list-item>
        </template>

        <v-list-item to="/typography" style="padding-left: 32px !important">
          <div class="d-flex align-center">
            <v-icon class="mr-2">mdi-application</v-icon>
            <span class="text-subtitle-2">커넥트립</span>
          </div>
        </v-list-item>
        <v-list-item to="/typography" style="padding-left: 32px !important">
          <div class="d-flex align-center">
            <v-icon class="mr-2">mdi-application</v-icon>
            <span class="text-subtitle-2">전화대장군</span>
          </div>
        </v-list-item>
        <v-list-item to="/typography" style="padding-left: 32px !important">
          <div class="d-flex align-center">
            <v-icon class="mr-2">mdi-application</v-icon>
            <span class="text-subtitle-2">로컬 업</span>
          </div>
        </v-list-item>
      </v-list-group>

      <!-- 보일러플레이트 -->
      <v-container class="d-flex align-center pa-2">
        <span class="mr-2 text-no-wrap text-subtitle-1">Contact</span>
        <v-divider />
      </v-container>
      <v-list-item href="mailto:49ehyeon42@email.com" target="_blank">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-email</v-icon>
          <span class="text-subtitle-2">Email</span>
        </div>
      </v-list-item>
      <v-list-item href="https://github.com/49EHyeon42" target="_blank">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-github</v-icon>
          <span class="text-subtitle-2">Github</span>
        </div>
      </v-list-item>

      <v-container class="d-flex align-center pa-2">
        <span class="mr-2 text-no-wrap text-subtitle-2">Sub Title</span>
        <v-divider />
      </v-container>
      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-format-text-variant</v-icon>
          <span class="text-subtitle-2">Typography</span>
        </div>
      </v-list-item>

      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-star-circle</v-icon>
          <span class="text-subtitle-2">Icons</span>
        </div>
      </v-list-item>

      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-credit-card-outline</v-icon>
          <span class="text-subtitle-2">Cards</span>
        </div>
      </v-list-item>

      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-table</v-icon>
          <span class="text-subtitle-2">Tables</span>
        </div>
      </v-list-item>

      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-alert</v-icon>
          <span class="text-subtitle-2">Alerts</span>
        </div>
      </v-list-item>

      <v-list-item to="/">
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-message-alert</v-icon>
          <span class="text-subtitle-2">Dialogs</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>

<!-- text-medium-emphasis 로 검정에서 회색 변경 가능 -->
