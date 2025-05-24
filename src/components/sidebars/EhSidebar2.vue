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

    <v-list density="compact">
      <EhListItem2 to="/" icon="mdi-home" title="Home" />
      <EhListItem2 to="/about" icon="mdi-account" title="About" />

      <v-list-group>
        <template #activator="{ props }">
          <EhListItem2 v-bind="props" icon="mdi-folder" title="Projects" />
        </template>

        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="커넥트립" />
        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="전화대장군" />
        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="로컬업" />
      </v-list-group>

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
