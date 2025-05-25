<script setup lang="ts">
import { ref } from 'vue';

import EhBrand from '../common/EhBrand.vue';
import EhListSubHeader2 from './subHeaders/EhListSubHeader2.vue';
import EhListItem2 from './items/EhListItem2.vue';

const drawer = defineModel<boolean>('drawer');
const props = defineProps<{
  permanent?: boolean;
}>();

const hasCopied = ref(false);

const copyEmail = async () => {
  await navigator.clipboard.writeText('49ehyeon42@email.com');
  hasCopied.value = true;
};

const resetCopyIcon = () => {
  hasCopied.value = false;
};
</script>

<template>
  <v-navigation-drawer v-model="drawer" temporary :permanent="props.permanent">
    <v-container class="d-flex align-center justify-space-between">
      <EhBrand />
      <v-btn v-if="$vuetify.display.mdAndDown" icon variant="text" @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
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
        <EhListItem2 :depth="1" to="/" icon="mdi-application" title="로컬업">
          <template #append>
            <v-badge color="primary" content="NEW" inline />
          </template>
        </EhListItem2>
      </v-list-group>

      <v-list-group>
        <template #activator="{ props }">
          <EhListItem2 v-bind="props" icon="mdi-tools" title="Utilities" />
        </template>

        <EhListItem2
          :depth="1"
          to="/utilities/case-converter"
          icon="mdi-format-letter-case"
          title="Case Converter"
        >
          <template #append>
            <v-badge color="primary" content="NEW" inline />
          </template>
        </EhListItem2>
      </v-list-group>

      <EhListSubHeader2 title="Contact" />
      <EhListItem2
        href="mailto:49ehyeon42@email.com"
        icon="mdi-email"
        target="_blank"
        title="Email"
      >
        <template #append>
          <v-tooltip text="49ehyeon42@email.com" location="top">
            <template #activator="{ props }">
              <v-icon
                v-bind="props"
                class="copy-icon"
                @click.stop.prevent="copyEmail"
                @mouseleave="resetCopyIcon"
              >
                {{ !hasCopied ? 'mdi-content-copy' : 'mdi-check' }}
              </v-icon>
            </template>
          </v-tooltip>
        </template>
      </EhListItem2>
      <EhListItem2
        href="https://github.com/49EHyeon42"
        icon="mdi-github"
        target="_blank"
        title="Github"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.copy-icon {
  transition: transform 0.3s ease;
}
.copy-icon:hover {
  transform: scale(1.3);
}
</style>
