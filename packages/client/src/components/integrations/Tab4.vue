<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul
        role="list"
        class="mt-10 gap-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        <li
          v-for="integration in integrations"
          :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm"
        >
          <div
            :class="[
              integration.bgColor,
              'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
            ]"
          >
            <Icon :icon="integration.icon" class="text-6xl" />
          </div>
          <div
            class="flex flex-1 items-center justify-between truncate rounded-r-md bg-white/80"
          >
            <div class="flex-1 truncate px-4 py-2 text-md text-semibold">
              <a
                :href="integration.href"
                class="font-medium text-pop-primary/80 hover:text-pop-primary"
                >{{ integration.name }}
              </a>
              <p class="mt-1 text-dull-secondary/80 text-sm">
                Type: {{ integration.type }}
              </p>
            </div>
            <div class="flex-shrink-0 pr-2">
              <button
                type="button"
                class="inline-flex p-1 m-1 items-center justify-center rounded-full bg-transparent text-dull-secondary hover:text-pop-primary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                <span class="sr-only">Open options</span>
                <!-- <i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i> -->
                <i
                  class="fa fa-plug-circle-xmark fa-rotate-by text-3xl"
                  style="--fa-rotate-angle: 45deg"
                ></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'; // https://iconify.design/docs/icon-components/vue/
import { PageDivisionLayout } from '@am-ogs/vue-ui';

defineProps<{
  title: string;
  description: string;
}>();

const integrations = [
  {
    name: 'Redfin',
    initials: 'R',
    icon: 'arcticons:redfin',
    href: '#',
    type: 'Property Listing',
    bgColor: 'bg-pop-secondary/40',
  },
  {
    name: 'Realtor',
    initials: 'R',
    icon: 'arcticons:realtor',
    href: '#',
    type: 'Property Listing',
    bgColor: 'bg-pop-secondary/40',
  },
  {
    name: 'Zillow',
    initials: 'Z',
    icon: 'arcticons:zillow',
    href: '#',
    type: 'Property Listing',
    bgColor: 'bg-pop-secondary/60',
  },
];
</script>
