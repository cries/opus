<template>
  <v-list lines="two">
    <v-list-item
      v-if="entries.length == 0"
      subtitle="No entries to display!"
      disabled
    />
    <template
      v-for="entry in entries"
      :key="entry.id"
    >
      <v-list-item
        :title="entry.title"
        :subtitle="entry.start"
      >
        <template v-slot:prepend>
          <v-avatar>
            <v-icon v-if="!entry.end" color="red">mdi-timer-sand</v-icon>
            <v-icon v-else color="green">mdi-checkbox-marked-circle-outline</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-avatar>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-avatar>
        </template>
      </v-list-item>
      <v-divider
        role="presentation"
        thickness="1" />
    </template>
  </v-list>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useEntriesStore } from '@/store/entries'

const store = useEntriesStore()
const { entries } = storeToRefs(store)

</script>
