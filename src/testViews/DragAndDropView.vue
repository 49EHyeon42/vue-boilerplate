<script lang="ts" setup>
import { ref } from 'vue';

const files = ref<File[]>([]);
const isDragOver = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

function onDragOver() {
  isDragOver.value = true;
}

function onDragLeave() {
  isDragOver.value = false;
}

function onDrop(event: DragEvent) {
  isDragOver.value = false;
  if (event.dataTransfer?.files) {
    addFiles(event.dataTransfer.files);
  }
}

function openFileDialog() {
  fileInput.value?.click();
}

function onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    addFiles(input.files);
  }
}

function addFiles(fileList: FileList) {
  for (let i = 0; i < fileList.length; i++) {
    files.value.push(fileList[i]);
  }
}
</script>

<template>
  <v-card
    class="d-flex align-center justify-center"
    height="200"
    outlined
    :class="{ 'drop-active': isDragOver }"
    @dragover.prevent="onDragOver"
    @dragleave="onDragLeave"
    @drop.prevent="onDrop"
  >
    <div>
      <v-icon size="40">mdi-cloud-upload</v-icon>
      <p>파일을 여기에 드래그하거나 클릭하여 업로드</p>
      <input type="file" ref="fileInput" class="d-none" @change="onFileSelected" multiple />
      <v-btn @click="openFileDialog" color="primary" small>파일 선택</v-btn>
    </div>
  </v-card>

  <!-- 업로드된 파일 목록 -->
  <v-list two-line v-if="files.length">
    <v-list-item v-for="(file, index) in files" :key="index">
      <v-list-item-content>
        <v-list-item-title>{{ file.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ file.size }} bytes</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.drop-active {
  border: 2px dashed #1976d2;
  background-color: #e3f2fd;
  transition: 0.3s;
}
</style>
