<template>
  <EhLayout2>
    <v-container fluid>
      <v-data-table-server
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        item-value="name"
        @update:options="loadItems"
      >
        <!-- fuel 열 커스터마이징 -->
        <template v-slot:[`item.fuel`]="{ item }">
          <v-tooltip location="top" :disabled="!truncatedItems[item.name]">
            <template #activator="{ props }">
              <div
                class="text-truncate"
                v-bind="props"
                @mouseenter="checkTruncation($event, item.name)"
              >
                {{ item.fuel }}
              </div>
            </template>
            {{ item.fuel }}
          </v-tooltip>
        </template>
      </v-data-table-server>
    </v-container>
  </EhLayout2>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DataTableHeader } from 'vuetify';

import EhLayout2 from '@/layouts/EhLayout2.vue';

// string -> name
const truncatedItems = ref<Record<string, boolean>>({});

function checkTruncation(event: MouseEvent, name: string) {
  const element = event.target as HTMLElement;

  // 최적화
  if (name in truncatedItems.value) {
    return;
  }

  if (element) {
    truncatedItems.value[name] = element.scrollWidth > element.clientWidth;
  }
}

type Car = {
  name: string; // 고유하다 가정
  horsepower: number;
  fuel: string;
  origin: string;
  price: number;
};

const cars = [
  {
    name: 'Ford Mustang',
    horsepower: 450,
    fuel: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis condimentum ante, a interdum augue rhoncus at. Donec eleifend nisl sit amet semper lobortis. Nulla feugiat ullamcorper urna, eget posuere lectus bibendum in. Maecenas sit amet euismod turpis. Aenean est augue, commodo maximus mauris nec, tristique gravida diam. Donec sapien risus, posuere sit amet sodales a, pulvinar ac risus. Sed eget semper diam. Suspendisse mollis tempus erat, ac iaculis justo. Sed fermentum dolor non lectus maximus, sit amet vulputate tortor feugiat. Phasellus scelerisque leo vitae urna euismod, a venenatis lectus finibus. Cras urna justo, sagittis ut semper et, blandit tempor purus.',
    origin: 'USA',
    price: 55000,
  },
  {
    name: 'Tesla Model S',
    horsepower: 670,
    fuel: 'In congue, tortor hendrerit egestas blandit, quam mauris lacinia risus, ut porta urna eros sed mi. Nunc eget hendrerit ante, ut maximus purus. Nunc venenatis sollicitudin tortor in ultricies. Donec egestas libero in enim fringilla, non posuere magna condimentum. Vestibulum malesuada condimentum faucibus. Phasellus sed sapien et ligula rhoncus aliquet quis eget urna. Donec rutrum eget tellus vel dapibus. Ut sit amet vestibulum mi. Vestibulum viverra, nunc ac mattis auctor, elit est gravida dui, vitae cursus nibh mauris ac lacus. Sed elementum libero eget lacus tempor dignissim.',
    origin: 'USA',
    price: 79999,
  },
  {
    name: 'BMW M3',
    horsepower: 503,
    fuel: 'Nulla ullamcorper aliquet nunc, vitae sagittis metus interdum condimentum. Vivamus feugiat leo est, pharetra efficitur ligula dictum et. In non lacinia risus, ultrices mollis libero. Aenean tristique sodales nisi, ac fermentum nisl aliquet vitae. Phasellus nulla leo, sollicitudin eu euismod ac, maximus non nunc. Cras magna elit, egestas ut lacus vitae, laoreet pharetra turpis. Donec tortor nisi, vehicula accumsan ex a, rutrum gravida neque. Aliquam imperdiet aliquam eros quis placerat. Proin est ex, accumsan nec scelerisque vel, ornare vel mauris. Cras ipsum lectus, ultricies finibus ultrices at, faucibus sagittis turpis. Integer porta nunc ultricies lacus varius consequat.',
    origin: 'Germany',
    price: 70000,
  },
  {
    name: 'Audi RS6',
    horsepower: 591,
    fuel: 'Vivamus imperdiet sit amet leo at malesuada. In gravida interdum eros. Aliquam vitae justo velit. Nullam tempus gravida mauris at commodo. Donec posuere purus in massa tincidunt maximus sit amet sit amet orci. Morbi id libero ut nisi euismod consequat. Nulla et venenatis lorem. Aliquam id nibh erat. Ut consequat imperdiet massa eu efficitur. Nam condimentum nunc id ante commodo vehicula. Suspendisse pretium arcu ut mauris gravida pellentesque. Praesent vestibulum arcu vel lobortis tempus.',
    origin: 'Germany',
    price: 109000,
  },
  {
    name: 'Chevrolet Camaro',
    horsepower: 650,
    fuel: 'Donec non nisl ultrices, tincidunt urna eu, rutrum libero. Nunc tincidunt ex non ligula tempus, eu vulputate arcu vulputate. Aenean porttitor elit a quam volutpat mollis. Aliquam dictum metus et ipsum pharetra aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque venenatis consectetur egestas. Aenean quis orci non erat finibus pharetra. Nulla sed purus turpis.',
    origin: 'USA',
    price: 62000,
  },
  {
    name: 'Porsche 911',
    horsepower: 379,
    fuel: 'Gasoline',
    origin: 'Germany',
    price: 101000,
  },
  {
    name: 'Jaguar F-Type',
    horsepower: 575,
    fuel: 'Gasoline',
    origin: 'UK',
    price: 61000,
  },
  {
    name: 'Mazda MX-5',
    horsepower: 181,
    fuel: 'Gasoline',
    origin: 'Japan',
    price: 26000,
  },
  {
    name: 'Nissan GT-R',
    horsepower: 565,
    fuel: 'Gasoline',
    origin: 'Japan',
    price: 113540,
  },
  {
    name: 'Mercedes-AMG GT',
    horsepower: 523,
    fuel: 'Gasoline',
    origin: 'Germany',
    price: 115900,
  },
];

type SortOrder = 'asc' | 'desc';

type SortBy<T> = {
  key: keyof T;
  order: SortOrder;
};

interface FetchParams {
  page: number;
  itemsPerPage: number;
  sortBy: SortBy<Car>[];
}

interface FetchResult {
  items: Car[];
  total: number;
}

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }: FetchParams): Promise<FetchResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // (가정) 서버 로직
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = cars.slice();
        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;

          items.sort((a, b) => {
            const aVal = a[sortKey];
            const bVal = b[sortKey];

            if (typeof aVal === 'number' && typeof bVal === 'number') {
              return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
            }

            const result = String(aVal).localeCompare(String(bVal));
            return sortOrder === 'desc' ? -result : result;
          });
        }
        const paginated = items.slice(start, end);
        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

const itemsPerPage = ref(5);
const headers = ref<DataTableHeader[]>([
  { title: 'Car Model', key: 'name', align: 'start' },
  { title: 'Horsepower', key: 'horsepower', align: 'center' },
  { title: 'Fuel Type', key: 'fuel', align: 'start', width: 300, maxWidth: 300 },
  { title: 'Origin', key: 'origin', align: 'center' },
  { title: 'Price ($)', key: 'price', align: 'end' },
]);
const serverItems = ref<Car[]>([]);
const loading = ref(true);
const totalItems = ref(0);

function loadItems(options: FetchParams) {
  loading.value = true;
  FakeAPI.fetch(options).then(({ items, total }) => {
    serverItems.value = items;
    totalItems.value = total;
    loading.value = false;
  });
}
</script>

<!-- reference: https://vuetifyjs.com/en/components/data-tables/basics/#server-side-tables -->
