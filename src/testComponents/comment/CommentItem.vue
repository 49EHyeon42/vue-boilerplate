<script setup lang="ts"></script>

<template>
  <v-card-text>
    <div class="d-flex align-start">
      <v-avatar class="mr-4">
        <v-img
          src="https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"
          alt="user profile image"
        />
      </v-avatar>

      <div class="flex-grow-1">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="font-weight-medium">닉네임</span>
            <small class="text-grey">1달 전</small>
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor
          magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris
          pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit.
        </div>
      </div>

      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" icon size="small" variant="text">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list activatable density="compact">
          <v-list-item prepend-icon="mdi-delete" title="삭제" />
          <v-list-item prepend-icon="mdi-alert-circle-outline" title="신고" />
        </v-list>
      </v-menu>
    </div>
  </v-card-text>
</template>

<style scoped></style>
