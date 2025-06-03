<script setup lang="ts">
import { computed, ref } from 'vue';
import { areas } from '@/constants/tatsCnctrRateServiceAreas';
import EhLayout2 from '@/layouts/EhLayout2.vue';

const selectedArea = ref<number | null>(null);
const selectedSigungu = ref<number | null>(null);

const serviceKey = ref('');
const pageNo = ref(1);
const numOfRows = ref(10);
const mobileOS = ref('WEB');
const mobileApp = ref('LocalUp');
const tAtsNm = ref('');
const _type = ref('json');

const apiResponse = ref<unknown>(null);

const areaOptions = computed(() => {
  const map = new Map<number, string>();
  areas.forEach((area) => {
    if (!map.has(area.areaCd)) {
      map.set(area.areaCd, area.areaNm);
    }
  });
  return Array.from(map, ([areaCd, areaNm]) => ({ areaCd, areaNm }));
});

const sigunguOptions = computed(() => {
  return areas.filter((area) => area.areaCd === selectedArea.value);
});

const sendRequest = () => {
  const params: Record<string, unknown> = {
    serviceKey: serviceKey.value,
    pageNo: pageNo.value,
    numOfRows: numOfRows.value,
    MobileOS: mobileOS.value,
    MobileApp: mobileApp.value,
    areaCd: selectedArea.value,
    signguCd: selectedSigungu.value,
    _type: _type.value,
  };
  if (tAtsNm.value) {
    params.tAtsNm = tAtsNm.value;
  }

  console.log('API 요청 파라미터:', params);

  const apiUrl = 'https://apis.data.go.kr/B551011/TatsCnctrRateService/tatsCnctrRatedList';
  const query = new URLSearchParams(params).toString();
  const requestUrl = `${apiUrl}?${query}`;

  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('API 응답 데이터:', data);
      apiResponse.value = data;
    })
    .catch((error) => {
      console.error('API 요청 오류:', error);
      apiResponse.value = { error: error.message };
    });
};

const uniqueTatsNmList = ref<string[]>([]);

const fetchAllTatsNm = async () => {
  try {
    // Step 1: totalCount 확인
    const params1: Record<string, unknown> = {
      serviceKey: serviceKey.value,
      pageNo: 1,
      numOfRows: 1,
      MobileOS: mobileOS.value,
      MobileApp: mobileApp.value,
      areaCd: selectedArea.value,
      signguCd: selectedSigungu.value,
      _type: _type.value,
    };
    const url1 = `https://apis.data.go.kr/B551011/TatsCnctrRateService/tatsCnctrRatedList?${new URLSearchParams(params1).toString()}`;
    const res1 = await fetch(url1);
    const data1 = await res1.json();
    const totalCount = data1.response.body.totalCount;

    console.log('전체 항목 수:', totalCount);

    // Step 2: 전체 데이터 가져오기
    const params2: Record<string, unknown> = {
      ...params1,
      numOfRows: totalCount,
    };
    const url2 = `https://apis.data.go.kr/B551011/TatsCnctrRateService/tatsCnctrRatedList?${new URLSearchParams(params2).toString()}`;
    const res2 = await fetch(url2);
    const data2 = await res2.json();

    // Step 3: 중복 없는 관광지명 추출
    const items = data2.response.body.items.item;
    const uniqueNames = Array.from(new Set(items.map((item: unknown) => item.tAtsNm)));
    uniqueTatsNmList.value = uniqueNames;

    console.log('중복 없는 관광지명 리스트:', uniqueNames);
  } catch (err) {
    console.error('전체 관광지명 가져오기 오류:', err);
    uniqueTatsNmList.value = [`오류: ${err}`];
  }
};
</script>

<template>
  <EhLayout2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="serviceKey" label="Service Key" outlined />
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="pageNo" type="number" label="Page No" outlined />
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="numOfRows" type="number" label="Num of Rows" outlined />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="mobileOS"
            :items="['IOS', 'AND', 'WEB', 'ETC']"
            label="Mobile OS"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="mobileApp" label="Mobile App" outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedArea"
            :items="areaOptions"
            item-title="areaNm"
            item-value="areaCd"
            label="지역 선택 (시/도)"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedSigungu"
            :items="sigunguOptions"
            item-title="sigunguNm"
            item-value="sigunguCd"
            label="시/군/구 선택"
            outlined
            :disabled="!selectedArea"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="tAtsNm" label="관광지명" outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="_type" :items="['json', 'xml']" label="응답 타입" outlined />
        </v-col>
        <v-col cols="12" md="8" class="d-flex align-center">
          <v-btn color="primary" @click="sendRequest"> API 요청 보내기 </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p>선택된 지역 코드: {{ selectedArea }}</p>
          <p>선택된 시/군/구 코드: {{ selectedSigungu }}</p>
          <p>응답 타입: {{ _type }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3>API 응답 결과</h3>
          <v-card outlined>
            <v-card-text>
              <pre>{{ apiResponse }}</pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 관광지명 -->
      <v-row>
        <v-col>
          <v-btn color="success" @click="fetchAllTatsNm"> 전체 관광지명 가져오기 </v-btn>
          <h4>관광지명 목록</h4>
          <v-card outlined>
            <v-card-text>
              <pre>{{ uniqueTatsNmList }}</pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
