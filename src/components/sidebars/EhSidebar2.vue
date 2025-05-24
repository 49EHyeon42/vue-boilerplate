<script setup lang="ts">
import EhListItem2 from './items/EhListItem2.vue';
import EhSubHeader2 from './subHeaders/EhSubHeader2.vue';

const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-container class="d-flex align-center">
      <span class="text-h6">49EHyeon42</span>
    </v-container>

    <v-list density="compact" class="m-0">
      <EhListItem2 to="/" icon="mdi-home" title="Home" />
      <EhListItem2 to="/about" icon="mdi-account" title="About" />

      <!-- <v-list-group>
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
      </v-list-group> -->

      <!-- 보일러플레이트 -->
      <EhSubHeader2 title="Contact" />
      <EhListItem2
        href="mailto:49ehyeon42@email.com"
        icon="mdi-email"
        target="_blank"
        title="Email"
      />
      <EhListItem2
        href="https://github.com/49EHyeon42"
        icon="mdi-github"
        target="_blank"
        title="Github"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>

<!-- text-medium-emphasis 로 검정에서 회색 변경 가능 -->
