<script setup lang="ts">
import EhBrand from '../common/EhBrand.vue';
import EhSubHeader2 from './subHeaders/EhSubHeader2.vue';
import EhListItem2 from './items/EhListItem2.vue';

const drawer = defineModel<boolean>('drawer');
const props = defineProps<{
  permanent?: boolean;
}>();
</script>

<template>
  <v-navigation-drawer v-model="drawer" temporary :permanent="props.permanent">
    <v-container class="d-flex align-center">
      <EhBrand />
    </v-container>

    <v-list density="compact">
      <EhListItem2 icon="mdi-home" title="Home" to="/" />
      <EhListItem2 icon="mdi-account" title="About" to="/about" />
      <EhListItem2
        href="https://www.notion.so/49EHyeon42-Blog-152e16973b1d8031b3bad3d5e959f9a1?pvs=4"
        icon="mdi-post"
        target="_blank"
        title="Blog"
      />

      <v-list-group>
        <template #activator="{ props }">
          <EhListItem2 v-bind="props" icon="mdi-folder" title="Projects" />
        </template>

        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="커넥트립" />
        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="전화대장군" />
        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="로컬업" badge="NEW" />
      </v-list-group>

      <v-list-group>
        <template #activator="{ props }">
          <EhListItem2 v-bind="props" icon="mdi-tools" title="Utilities" />
        </template>

        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="NULL" badge="NEW" />
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
