<template>
  <EhLayout2>
    <v-container fluid>
      <v-card style="height: 550px" class="d-flex flex-column">
        <v-card-title class="text-h5">관광지 랭킹 TOP 50 (서울특별시 / 구로구)</v-card-title>
        <v-divider />

        <div class="d-flex flex-grow-1" style="min-height: 0">
          <!-- 왼쪽 리스트 -->
          <div class="d-flex flex-column" style="width: 50%; height: 100%">
            <div style="flex: 1 1 auto; overflow-y: auto">
              <v-list class="pa-2">
                <v-list-item
                  v-for="place in list"
                  :key="place.hubTatsCd"
                  class="hoverable"
                  @click="moveTo(place)"
                >
                  <v-list-item-content>
                    <div class="d-flex align-center justify-space-between flex-wrap">
                      <div class="text-subtitle-2 font-weight-bold">
                        {{ place.hubRank }}위. {{ place.hubTatsNm }}
                      </div>
                      <div class="d-flex flex-wrap ga-2">
                        <v-chip color="primary" size="small">
                          {{ place.hubCtgryLclsNm }} / {{ place.hubCtgryMclsNm }}
                        </v-chip>
                        <v-chip color="secondary" size="small">
                          {{ place.signguNm }}
                        </v-chip>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </div>

          <!-- 오른쪽 지도 -->
          <div style="width: 50%; height: 100%">
            <div id="map" style="height: 100%"></div>
          </div>
        </div>
      </v-card>
    </v-container>
  </EhLayout2>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EhLayout2 from '@/layouts/EhLayout2.vue';

const list = ref<any[]>([]);
let map: any = null;
let marker: any = null;

onMounted(async () => {
  const url =
    'http://localhost:8080/api/tour-api/areaBasedList2?pageNo=1&numOfRows=50&baseYm=202503&areaCd=11&signguCd=11530';
  const res = await fetch(url);
  const json = await res.json();
  list.value = json.response?.body?.items?.item ?? [];

  loadKakaoMap();
});

// Kakao 지도 로딩 및 초기화
function loadKakaoMap() {
  const script = document.createElement('script');
  // Note: 사용 시 키 추가
  script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=&autoload=false';
  script.onload = () => {
    // @ts-ignore
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.501164213239, 126.882825790362),
        level: 5,
      };
      // @ts-ignore
      map = new kakao.maps.Map(container, options);
    });
  };
  document.head.appendChild(script);
}

// 리스트 클릭 시 지도 이동 및 마커 표시
function moveTo(place: any) {
  if (!map) return;

  const lat = parseFloat(place.mapY);
  const lng = parseFloat(place.mapX);

  const position = new kakao.maps.LatLng(lat, lng);

  map.setCenter(position);

  if (marker) {
    marker.setMap(null); // 기존 마커 제거
  }

  // @ts-ignore
  marker = new kakao.maps.Marker({
    position: position,
  });
  marker.setMap(map);
}
</script>
