<template>
  <PageLayout>
    <template #pageTitle> {{ page.name }} </template>
    <template #description> {{ page.description }} </template>

    <!-- Tabs -->
    <template #tabs>
      <div class="lg:hidden">
        <label for="selected-tab" class="sr-only">Select a tab</label>
        <select
          id="selected-tab"
          name="selected-tab"
          class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-pop-secondary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pop-primary sm:text-sm sm:leading-6"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden lg:block">
        <div class="border-b border-dull-secondary">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              @click.prevent="current_tab = tab.name"
              href="#"
              :class="[
                current_tab === tab.name
                  ? 'border-pop-primary text-pop-primary'
                  : 'border-transparent text-dull-secondary hover:border-dull-secondary hover:text-dull-secondary',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              ]"
              >{{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </template>
    <!-- End Tabs -->

    <!-- Search  -->
    <template #search>
      <div class="mt-10 divide-y divide-dull-secondary">
        <!-- Search  -->
        <form class="relative flex flex-1 m-1 h-12" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <i
            class="fa-solid fa-magnifying-glass text-pop-secondary pointer-events-none absolute inset-y-4 left-2 text-lg"
            aria-hidden="true"
          ></i>
          <input
            id="search-field"
            class="block h-full w-full pl-10 text-pop-secondary placeholder:text-pop-secondary focus:ring-0 sm:text-sm bg-dull-secondary/30 border-2 border-dull-secondary rounded-md"
            placeholder="search properties ..."
            type="search"
            name="search"
          />
        </form>
        <!-- End Search -->
      </div>
    </template>
    <!-- End Search  -->

    <template #pageContent>
      <div v-for="tab in tabs">
        <KeepAlive v-if="current_tab === tab.name">
          <component
            v-if="current_tab === tab.name"
            :title="tab.name"
            :description="tab.description"
            :is="
              defineAsyncComponent(
                () => import(`@/components/properties/${tab.name}.vue`),
              )
            "
          />
        </KeepAlive>
      </div>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { PageLayout } from '@am-ogs/vue-ui';
import { primary_navigation } from '@/helpers/navigation';

const page = primary_navigation.find((n) => n.name === 'My Properties');
const tabs = page.items;
const tab = page.items.find((t) => t.current === true);
const current_tab = ref(tab.name);
</script>
