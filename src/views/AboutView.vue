<script setup lang="ts">
import EhLayout2 from '@/layouts/EhLayout2.vue';
</script>

<template>
  <EhLayout2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="d-flex">
          <!-- TODO: 나중에 w-100 빼고 조절 -->
          <v-card class="w-100">
            <v-card-title>교외 활동</v-card-title>
            <v-card-text>
              <!-- TODO: md 미만 세로, 이후 가로, 리스트 안보이게 -->
              <v-timeline side="end" truncate-line="end">
                <v-timeline-item dot-color="blue" icon="mdi-run" fill-dot>
                  <template #opposite>2025.05.27 ~</template>
                  <div>
                    <div class="text-h6 font-weight-bold">2025 관광데이터 활용 공모전</div>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="deep-orange" icon="mdi-trophy" fill-dot>
                  <template #opposite>2024.10.02 ~ 2024.11.21</template>
                  <div>
                    <div class="text-h6 font-weight-bold">2024년 K-디지털 트레이닝 해커톤</div>
                    <ul class="pl-7">
                      <li>고용노동부, 한국기술교육대학교 직업능력심사평가원 주관</li>
                      <li>고령 사용자의 통화 내용을 분석하고, 알림을 보내는 아이디어</li>
                      <li>백엔드 MVP 개발 및 인프라 구축 담당</li>
                    </ul>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="deep-orange" icon="mdi-trophy" fill-dot>
                  <template #opposite>2024.04.03 ~ 2024.10.11</template>
                  <div>
                    <div class="text-h6 font-weight-bold">
                      카카오 테크 부트캠프 클라우드 네이티브 과정 1기
                    </div>
                    <ul class="pl-7">
                      <li>카카오, 한국전파진흥협회, 구름 주관</li>
                      <li>3번의 팀장 경험으로 리더십, 커뮤니케이션 능력 증진</li>
                      <li>팀 프로젝트로 서비스 기획, 개발, 운영 및 배포 경험</li>
                    </ul>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green" icon="mdi-certificate" fill-dot>
                  <template #opposite>2023.01.16 ~ 2023.02.24</template>
                  <div>
                    <div class="text-h6 font-weight-bold">
                      2023 삼성전자 DX부문 동계 대학생 S/W 알고리즘 역량 강화 특강, 수료
                    </div>
                    <ul class="pl-7">
                      <li>삼성전자 DX부문 주관</li>
                      <li>KMP, Trie 등 다양한 알고리즘을 접하며, 문제 접근법과 해결 역량 증진</li>
                    </ul>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green" icon="mdi-certificate" fill-dot>
                  <template #opposite>2022.08.06 ~ 2022.08.27</template>
                  <div>
                    <div class="text-h6 font-weight-bold">
                      클라우드 스터디 잼 - 구글 클라우드 입문, 수료
                    </div>
                    <ul class="pl-7">
                      <li>GDG Cloud Busan 주관</li>
                      <li>GCP 사용으로 클라우드 서비스 체험 및 스프링 배포 경험</li>
                    </ul>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
