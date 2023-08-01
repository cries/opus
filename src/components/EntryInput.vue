<template>
   <v-toolbar
  >
    <v-container fluid>
      <v-row
        class="pa-3"
        align="center">
        <v-text-field
          v-model="entry"
          single-line
          placeholder="Enter a new task"
          variant="plain"
          @keydown.enter="addEntryAndClear(entry)"
        />
        <v-btn
          icon
          @click="addEntryAndClear(entry)">
          <v-icon flat>mdi-arrow-right-bold-circle</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue';
import { useEntriesStore } from '@/store/entries'

  const entry = ref('')
  const store = useEntriesStore()

  function addEntryAndClear(item) {
    if (item.length === 0) {
      return
    }
    store.add(item, new Date().toISOString())
    entry.value = ''
  }
</script>
