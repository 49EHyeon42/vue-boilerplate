<script setup lang="ts"></script>

<template>
  <v-navigation-drawer>
    <v-container class="d-flex align-center">
      <v-icon icon="$vuetify" size="x-large" class="mr-2" />
      <span class="text-h6">49EHyeon42</span>
    </v-container>

    <v-list density="compact" class="m-0">
      <v-container class="d-flex align-center">
        <span class="mr-2 text-no-wrap text-subtitle-1">Apps & Pages</span>
        <v-divider />
      </v-container>
      <v-list-item prepend-icon="mdi-email" to="/">
        <span class="text-subtitle-2">EMail </span>
      </v-list-item>
      <v-list-item title="Email" prepend-icon="mdi-email" to="/" class="text-caption" />
      <v-list-item title="Chat" prepend-icon="mdi-chat" to="/" />
      <v-list-item title="Calendar" prepend-icon="mdi-calendar" to="/" />
      <v-list-item title="Account Settings" prepend-icon="mdi-cog" to="/" />
      <v-list-item title="Sign In" prepend-icon="mdi-login" to="/" />
      <v-list-item title="Register" prepend-icon="mdi-account-plus" to="/" />
      <v-list-item title="Error" prepend-icon="mdi-alert-circle" to="/" />

      <v-container class="d-flex align-center">
        <span class="mr-2 text-no-wrap text-subtitle-2">User Interface</span>
        <v-divider />
      </v-container>
      <v-list-item title="Typography" prepend-icon="mdi-format-text-variant" to="/" />
      <v-list-item title="Icons" prepend-icon="mdi-star-circle" to="/" />
      <v-list-item title="Cards" prepend-icon="mdi-credit-card-outline" to="/" />
      <v-list-item title="Tables" prepend-icon="mdi-table" to="/" />
      <v-list-item title="Alerts" prepend-icon="mdi-alert" to="/" />
      <v-list-item title="Dialogs" prepend-icon="mdi-message-alert" to="/" />

      <v-container class="d-flex align-center">
        <span class="mr-2 text-no-wrap text-subtitle-2">User Interface</span>
        <v-divider />
      </v-container>
      <v-list-item title="Typography" prepend-icon="mdi-format-text-variant" to="/" />
      <v-list-item title="Icons" prepend-icon="mdi-star-circle" to="/" />
      <v-list-item title="Cards" prepend-icon="mdi-credit-card-outline" to="/" />
      <v-list-item title="Tables" prepend-icon="mdi-table" to="/" />
      <v-list-item title="Alerts" prepend-icon="mdi-alert" to="/" />
      <v-list-item title="Dialogs" prepend-icon="mdi-message-alert" to="/" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
