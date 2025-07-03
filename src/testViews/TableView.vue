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
      ></v-data-table-server>
    </v-container>
  </EhLayout2>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DataTableHeader } from 'vuetify';

import EhLayout2 from '@/layouts/EhLayout2.vue';

type Car = {
  name: string;
  horsepower: number;
  fuel: string;
  origin: string;
  price: number;
};

const cars = [
  {
    name: 'Ford Mustang',
    horsepower: 450,
    fuel: 'Gasoline',
    origin: 'USA',
    price: 55000,
  },
  {
    name: 'Tesla Model S',
    horsepower: 670,
    fuel: 'Electric',
    origin: 'USA',
    price: 79999,
  },
  {
    name: 'BMW M3',
    horsepower: 503,
    fuel: 'Gasoline',
    origin: 'Germany',
    price: 70000,
  },
  {
    name: 'Audi RS6',
    horsepower: 591,
    fuel: 'Gasoline',
    origin: 'Germany',
    price: 109000,
  },
  {
    name: 'Chevrolet Camaro',
    horsepower: 650,
    fuel: 'Gasoline',
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
  { title: 'Fuel Type', key: 'fuel', align: 'start' },
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
