<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <v-container fluid class="d-flex justify-center align-start">
      <div class="d-flex gap">
        <v-avatar size="256">
          <img src="/home/profile.png" />
        </v-avatar>

        <div class="d-flex flex-column" style="gap: 16px">
          <div class="d-flex">
            <span class="text-h2 font-weight-bold">49EHyeon42</span>
            <span class="text-h6 font-weight-medium text-grey ml-2">Noah.jo (조태현)</span>
            <!-- 여기에 컨택 추가 이메일, 깃허브 -->
          </div>

          <!-- 컨택 아이콘을 v-chip으로 -->
          <div class="d-flex align-center" style="gap: 8px">
            <v-chip
              variant="outlined"
              href="mailto:49ehyeon42@email.com"
              target="_blank"
              prepend-icon="mdi-email"
            >
              Email
            </v-chip>

            <v-chip
              variant="outlined"
              href="https://github.com/49EHyeon42"
              target="_blank"
              prepend-icon="mdi-github"
            >
              GitHub
            </v-chip>
          </div>

          <div>
            <span class="text-h4 font-weight-bold">집중력은 자신감과 갈망이 결합하여 생긴다.</span>
          </div>
        </div>
      </div>
      <!-- 아바타랑 헤더(컨텍 밑으로) -->
      <div>
        <!-- 이미지랑 텍스트 (xxx 수상) -->
        <!-- v-carousel -->
        <span>여기</span>
      </div>
    </v-container>
  </EhLayout2>
</template>

<style scoped>
.gap {
  gap: 32px;
}
</style>
