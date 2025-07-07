<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title: string;
    content?: string;
    lines?: number;
  }>(),
  {
    content: '',
    lines: 5,
  },
);

const emits = defineEmits<{
  save: [payload: { title: string; content: string }];
}>();

const isEditing = ref<boolean>(false);
const editTitle = ref<string>('');
const editContent = ref<string>('');

const computeClampStyles = computed(() => ({
  '--lines': props.lines,
}));

function startEdit() {
  editTitle.value = props.title;
  editContent.value = props.content;
  isEditing.value = true;
}

function cancelEdit() {
  isEditing.value = false;
  editTitle.value = props.title;
  editContent.value = props.content;
}

async function saveEdit() {
  emits('save', { title: editTitle.value, content: editContent.value });
  isEditing.value = false;
}
</script>

<template>
  <v-card class="ma-4">
    <v-card-title>
      <template v-if="isEditing">
        <v-text-field v-model="editTitle" hide-details label="제목" />
      </template>
      <template v-else>
        <div class="d-flex align-center justify-space-between">
          <span>{{ props.title }}</span>
          <v-btn icon variant="text" @click="startEdit">
            <v-icon size="x-small">mdi-pencil</v-icon>
          </v-btn>
        </div>
      </template>
    </v-card-title>

    <v-card-text>
      <template v-if="isEditing">
        <v-textarea v-model="editContent" auto-grow hide-details label="내용" />
      </template>
      <template v-else>
        <div class="multiline-clamp" :style="computeClampStyles">
          {{ props.content }}
        </div>
      </template>
    </v-card-text>

    <v-card-actions v-if="isEditing">
      <v-spacer />
      <v-btn color="secondary" @click="cancelEdit">취소</v-btn>
      <v-btn color="primary" @click="saveEdit">저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.multiline-clamp {
  /* 말줄임 처리를 위한 기본 설정 */
  overflow: hidden;

  /* 다중 행 클램프 설정 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 웹킷 전용 */
  -webkit-line-clamp: var(--lines);
  /* 표준 속성 (일부 브라우저) */
  line-clamp: var(--lines);
}
</style>
