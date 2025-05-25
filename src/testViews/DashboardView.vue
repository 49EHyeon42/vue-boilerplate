<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <v-container fluid>
      <h1>2:10, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="2" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>2</v-card-title>
            <v-card-text>2 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="10" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>10</v-card-title>
            <v-card-text>10 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <h1>4:8, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="8" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>8</v-card-title>
            <v-card-text>8 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>6:6, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="6" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>6</v-card-title>
            <v-card-text>6 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="6" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>6</v-card-title>
            <v-card-text>6 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>2:10, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="2" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>2</v-card-title>
            <v-card-text>2 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="10" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>10</v-card-title>
            <v-card-text>10 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>4:4:4, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>3:3:3:3, 반응형</h1>
      <v-row>
        <v-col cols="12" sm="12" md="3" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>3</v-card-title>
            <v-card-text>3 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>3</v-card-title>
            <v-card-text>3 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>3</v-card-title>
            <v-card-text>3 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>3</v-card-title>
            <v-card-text>3 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>2:10, 2 영역 상하 분할</h1>
      <v-row>
        <!-- 2 (왼쪽 상하 2분할) -->
        <v-col cols="12" sm="12" md="2">
          <v-row dense>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>상단</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>하단</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- 10 -->
        <v-col cols="12" sm="12" md="10" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>10</v-card-title>
            <v-card-text>10 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>4:8, 4 영역 2x2 그리드</h1>
      <v-row>
        <!-- 4 (왼쪽 2x2) -->
        <v-col cols="12" sm="12" md="4">
          <div class="h-100 w-100">
            <v-row dense>
              <v-col cols="6" class="d-flex">
                <v-card class="h-100 w-100">
                  <v-card-text>1</v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" class="d-flex">
                <v-card class="h-100 w-100">
                  <v-card-text>2</v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" class="d-flex">
                <v-card class="h-100 w-100">
                  <v-card-text>3</v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" class="d-flex">
                <v-card class="h-100 w-100">
                  <v-card-text>4</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- 8 -->
        <v-col cols="12" sm="12" md="8" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>8</v-card-title>
            <v-card-text>8 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>6:6 (오른쪽 2x2 그리드)</h1>
      <v-row dense>
        <!-- 왼쪽 6 -->
        <v-col cols="12" sm="12" md="6" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-text>왼쪽 6</v-card-text>
          </v-card>
        </v-col>

        <!-- 오른쪽 6 (2x2 그리드) -->
        <v-col cols="12" sm="12" md="6">
          <v-row dense class="h-100">
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>오른쪽 1</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>오른쪽 2</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>오른쪽 3</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>오른쪽 4</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>4:4:4, 마지막 4 영역 2x2 분할</h1>
      <v-row>
        <!-- 첫 번째 4 -->
        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <!-- 두 번째 4 -->
        <v-col cols="12" sm="12" md="4" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>4</v-card-title>
            <v-card-text>4 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <!-- 마지막 4 (2x2 분할) -->
        <v-col cols="12" sm="12" md="4">
          <v-row dense>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>1</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>2</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>3</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>4</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>6:3:3, 가운데 3을 상하로 분할</h1>
      <v-row>
        <!-- 6 -->
        <v-col cols="12" sm="12" md="6" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>6</v-card-title>
            <v-card-text>6 영역 내용</v-card-text>
          </v-card>
        </v-col>

        <!-- 가운데 3 (상하 2분할) -->
        <v-col cols="12" sm="12" md="3">
          <v-row dense>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>가운데 상단</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>가운데 하단</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- 마지막 3 -->
        <v-col cols="12" sm="12" md="3" class="d-flex">
          <v-card class="h-100 w-100">
            <v-card-title>3</v-card-title>
            <v-card-text>3 영역 내용</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>8:4 (8 → 위 2 / 아래 3), 4 → 3개</h1>
      <v-row>
        <!-- 8 (왼쪽) -->
        <v-col cols="12" sm="12" md="8" class="d-flex flex-column">
          <!-- 위쪽 2개 -->
          <v-row dense class="flex-grow-1">
            <v-col cols="12" sm="12" md="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>8 위 1</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>8 위 2</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- 아래쪽 3개 -->
          <v-row dense class="flex-grow-1">
            <v-col cols="12" sm="12" md="4" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>8 아래 1</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>8 아래 2</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>8 아래 3</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- 4 (오른쪽) -->
        <v-col cols="12" sm="12" md="4">
          <v-row dense>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>4 - 1</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>4 - 2</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-card class="h-100 w-100">
                <v-card-text>4 - 3</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>2:10 (2 → 5칸 세로, 10 → 3칸 세로)</h1>
      <v-row dense>
        <!-- 왼쪽 2 (세로로 5칸) -->
        <v-col cols="12" sm="12" md="2" class="d-flex flex-column" style="gap: 8px">
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>왼쪽 1</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>왼쪽 2</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>왼쪽 3</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>왼쪽 4</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>왼쪽 5</v-card-text>
          </v-card>
        </v-col>

        <!-- 오른쪽 10 (세로로 3칸) -->
        <v-col cols="12" sm="12" md="10" class="d-flex flex-column" style="gap: 8px">
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>오른쪽 1</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>오른쪽 2</v-card-text>
          </v-card>
          <v-card class="h-100 w-100 flex-grow-1">
            <v-card-text>오른쪽 3</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <h1>메뉴</h1>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="d-flex justify-space-between align-center">
              <span>제목</span>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn v-bind="props" icon variant="text">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>옵션 1</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>옵션 2</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>

            <v-card-text> 카드 내용 </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
