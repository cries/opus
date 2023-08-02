<template>
  <v-list lines="two">
    <v-list-item
      v-if="entries.length == 0"
      subtitle="No entries to display!"
      disabled
    />
    <template
      v-for="job in entries"
      :key="job.id"
    >
      <job-item :job="job" />
      <v-divider
        role="presentation"
        thickness="1" />
    </template>
  </v-list>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useEntriesStore } from '@/store/entries'
import JobItem from './JobItem.vue'

const store = useEntriesStore()
const { entries } = storeToRefs(store)

</script>
