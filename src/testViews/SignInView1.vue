<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <!-- d-flex: flexbox 레이아웃을 적용 (display: flex) -->
    <!-- align-center: 수직 방향으로 가운데 정렬 (align-items: center) -->
    <!-- justify-center: 수평 방향으로 가운데 정렬 (justify-content: center) -->
    <!-- fill-height: 부모 요소의 높이를 100%로 채움 (height: 100%) -->
    <v-container fluid class="d-flex align-center justify-center fill-height">
      <v-card min-width="512">
        <v-toolbar>
          <v-toolbar-title>Sign In</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account"
              name="email"
              label="Email"
              type="email"
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/" class="ml-auto">Sign In</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
