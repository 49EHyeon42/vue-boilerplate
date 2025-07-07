<script setup lang="ts">
import { ref } from 'vue';

import EhLayout2 from '@/layouts/EhLayout2.vue';
import TestCard from '@/testComponents/card/TestCard.vue';

interface Card {
  id: number;
  title: string;
  content: string;
}

const cards = ref<Card[]>([
  {
    id: 1,
    title: 'Title1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nisi at risus luctus laoreet et eu felis. Nulla facilisi. Pellentesque aliquet nunc eget interdum luctus. Etiam venenatis aliquam elit, ac placerat est venenatis ut. Maecenas eget dolor sit amet metus molestie commodo. Donec porttitor ligula nibh, at venenatis nunc convallis non. Integer gravida elit vitae justo ullamcorper pellentesque.',
  },
  {
    id: 2,
    title: 'Title2',
    content:
      'Suspendisse quis tortor felis. Curabitur varius massa maximus, placerat nisl et, accumsan erat. Aliquam diam mauris, auctor interdum varius id, fermentum at tortor. Cras venenatis nisl neque, sit amet aliquam augue consequat elementum. Donec ultricies risus elit, in feugiat turpis pulvinar ut. Morbi suscipit id tellus luctus placerat. Quisque pharetra nec ex eget congue. In vel hendrerit arcu. Aliquam sit amet massa porta, scelerisque ex sed, elementum ligula. Mauris eget eros in quam tristique fringilla nec sit amet mauris. Integer iaculis ipsum sed risus viverra bibendum.',
  },
  {
    id: 3,
    title: 'Title3',
    content:
      'Proin ut feugiat lacus. Sed volutpat tempus ante eget egestas. Maecenas nunc diam, vestibulum eu ultricies vel, ullamcorper vel massa. Sed a porta magna. Aenean velit ligula, cursus id felis ac, pretium molestie diam. Morbi justo nunc, rhoncus sit amet arcu a, bibendum congue dolor. Morbi ornare urna a viverra pulvinar. Maecenas ac tellus ut justo lobortis laoreet ut et eros. Phasellus eu nulla eu nisi dictum mattis et quis nisi. Aliquam vitae massa erat. Proin convallis tempus eros, ut scelerisque mi vestibulum ut. Cras mattis molestie bibendum. Aenean in lectus sed risus vestibulum finibus.',
  },
  {
    id: 4,
    title: 'Title4',
    content:
      'Duis nulla tortor, molestie sit amet lectus eget, pharetra semper leo. Nunc id quam eget elit porta sagittis id a neque. Donec tempus, metus scelerisque rutrum eleifend, orci lectus sagittis ante, volutpat porta mauris nisl a nisi. Etiam lacinia erat finibus turpis luctus porttitor. Nulla pulvinar enim ac urna eleifend vestibulum. Donec sit amet elit non leo feugiat ultricies vel sed velit. Pellentesque id tortor venenatis, bibendum dui ut, scelerisque mi. Donec id rhoncus mi. Suspendisse vitae nisl pulvinar lectus pretium aliquet. Pellentesque velit leo, hendrerit vitae molestie sed, gravida eu nibh. Mauris vitae commodo neque.',
  },
  {
    id: 5,
    title: 'Title5',
    content:
      'Nunc eu sem sapien. Sed sit amet elit ac eros vehicula hendrerit. Pellentesque consectetur, quam a laoreet porttitor, velit nunc dignissim lacus, non finibus nulla urna id dolor. Proin lacinia magna eget dictum fringilla. Sed ullamcorper, urna eget scelerisque sodales, risus est fermentum augue, id varius elit tortor vitae est. Integer id hendrerit felis. Nulla fringilla sem ac ex eleifend scelerisque. Aliquam varius nec erat id laoreet. Mauris in dignissim nisl. Donec porttitor felis nec egestas varius. Morbi egestas maximus mi. Cras sagittis iaculis ex, nec molestie nibh volutpat id. Vivamus laoreet sem ac nulla sodales iaculis.',
  },
]);

const saveCard = async (id: number, payload: { title: string; content: string }) => {
  // API 호출 가정, 1초 지연
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (Math.random() < 0.5) {
    throw new Error('저장 실패');
  }

  const index = cards.value.findIndex((card) => card.id === id);

  if (index !== -1) {
    cards.value[index].title = payload.title;
    cards.value[index].content = payload.content;
  }
};
</script>

<template>
  <EhLayout2>
    <v-container fluid>
      <TestCard
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :content="card.content"
        :lines="3"
        @save="(payload) => saveCard(card.id, payload)"
      />
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
