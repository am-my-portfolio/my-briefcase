<template>
  <div class="mt-10">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 p-2 rounded-md"
    >
      <li
        v-for="person in owners"
        :key="person.email"
        class="col-span-1 flex flex-col divide-y divide-dull-secondary rounded-md bg-dull-primary/90 border-8 border-pop-secondary text-center shadow"
      >
        <ItemsGridLayout>
          <template #image>
            <img class="h-32 w-32 rounded-full" :src="person.imageUrl" alt="" />
          </template>

          <template #h1>
            {{ person.name }}
          </template>

          <template #one> Unit Count </template>
          <template #two> {{ person.unit_count }} </template>

          <template #three> Portfolio Value (in Millions) </template>
          <template #four>
            {{ person.portfolio_value }}
          </template>

          <template #five>
            <a
              :href="`mailto:${person.email}`"
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-envelope text-pop-primary text-xl"
                aria-hidden="true"
              ></i>
              <span>Email</span>
            </a>
          </template>

          <template #six>
            <a
              :href="`tel:${person.telephone}`"
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-phone text-pop-primary text-lg"
                aria-hidden="true"
              ></i>
              Call
            </a>
          </template>
        </ItemsGridLayout>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ItemsGridLayout } from '@am-ogs/vue-ui';

const owners = [
  {
    name: 'Jane Cooper',
    unit_count: 5,
    portfolio_value: 1.32,
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    unit_count: 3,
    portfolio_value: 2.5,
    email: 'cody.fisher@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Esther Howard',
    unit_count: 8,
    portfolio_value: 5,
    email: 'esther.howard@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cameron Williamson',
    unit_count: 12,
    portfolio_value: 50,
    email: 'cameron.wil@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];
</script>
