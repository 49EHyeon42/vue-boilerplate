<template>
  <v-container fluid class="pa-0 splitter-container">
    <div ref="container" class="d-flex" style="height: 100vh" :class="{ 'no-select': isDragging }">
      <!-- 왼쪽 패널 -->
      <div class="panel flex-shrink-0" :style="{ width: leftWidth + '%' }">
        <v-card class="ma-2 pa-4" height="calc(100vh - 16px)">
          <v-card-title class="primary--text">
            <v-icon left color="primary">mdi-folder</v-icon>
            왼쪽 패널
          </v-card-title>
          <v-card-text>
            <p>현재 크기: {{ Math.round(leftWidth) }}%</p>
            <v-divider class="my-3"></v-divider>

            <v-list>
              <v-list-item v-for="i in 8" :key="i">
                <v-list-item-avatar>
                  <v-icon>mdi-file-document</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>파일 {{ i }}</v-list-item-title>
                  <v-list-item-subtitle>샘플 파일입니다</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-btn color="primary" class="mt-4" block>
              <v-icon left>mdi-plus</v-icon>
              새 파일 추가
            </v-btn>
          </v-card-text>
        </v-card>
      </div>

      <!-- 스플리터 핸들 -->
      <div
        class="splitter-handle flex-shrink-0"
        :class="{ dragging: isDragging }"
        style="width: 6px"
        @mousedown="startDrag"
      >
        <div class="d-flex align-center justify-center" style="height: 100%">
          <v-icon small color="grey">mdi-drag-vertical</v-icon>
        </div>
      </div>

      <!-- 오른쪽 패널 -->
      <div class="panel flex-grow-1" :style="{ width: 100 - leftWidth + '%' }">
        <v-card class="ma-2 pa-4" height="calc(100vh - 16px)">
          <v-card-title class="success--text">
            <v-icon left color="success">mdi-text-box</v-icon>
            오른쪽 패널
          </v-card-title>
          <v-card-text>
            <p>현재 크기: {{ Math.round(100 - leftWidth) }}%</p>
            <v-divider class="my-3"></v-divider>

            <v-textarea
              v-model="textContent"
              label="메모"
              rows="15"
              outlined
              hint="여기에 텍스트를 입력하세요"
              persistent-hint
            ></v-textarea>

            <v-row class="mt-4">
              <v-col cols="6">
                <v-btn color="success" block>
                  <v-icon left>mdi-content-save</v-icon>
                  저장
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="warning" block>
                  <v-icon left>mdi-refresh</v-icon>
                  초기화
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'VuetifySplitter',
  data() {
    return {
      leftWidth: 40, // 왼쪽 패널 너비 (퍼센트)
      isDragging: false,
      textContent:
        '여기에 텍스트를 입력하세요...\n\n스플리터를 드래그하여 패널 크기를 조절할 수 있습니다.',
      minWidth: 15, // 최소 너비 (퍼센트)
      maxWidth: 85, // 최대 너비 (퍼센트)
    };
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      e.preventDefault();

      // 전역 이벤트 리스너 추가
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.stopDrag);

      // 드래그 중 텍스트 선택 방지
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    },

    handleDrag(e) {
      if (!this.isDragging || !this.$refs.container) return;

      const container = this.$refs.container;
      const rect = container.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - rect.left) / rect.width) * 100;

      // 최소/최대 크기 제한
      if (newLeftWidth >= this.minWidth && newLeftWidth <= this.maxWidth) {
        this.leftWidth = newLeftWidth;
      }
    },

    stopDrag() {
      this.isDragging = false;

      // 전역 이벤트 리스너 제거
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.stopDrag);

      // 스타일 복원
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    },
  },

  beforeUnmount() {
    // 컴포넌트 파괴 시 이벤트 리스너 정리
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  },
};
</script>

<style scoped>
.splitter-container {
  height: 100vh;
  overflow: hidden;
}

.splitter-handle {
  cursor: col-resize;
  background: #e0e0e0;
  border: 1px solid #ccc;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.splitter-handle:hover {
  background: #d0d0d0;
}

.splitter-handle.dragging {
  background: #1976d2;
}

.panel {
  overflow: auto;
  height: 100%;
}

.no-select {
  user-select: none;
}

/* 스크롤바 스타일링 (선택사항) */
.panel::-webkit-scrollbar {
  width: 6px;
}

.panel::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.panel::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.panel::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>

<!-- 클로드: splitter 구현 -->
