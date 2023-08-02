<template>
  <v-list-item
    :title="job.title"
    :subtitle="subtitle"
  >
    <template v-slot:prepend>
      <v-avatar>
        <v-icon :color="statusColor">{{ statusIcon }}</v-icon>
      </v-avatar>
    </template>

    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
              <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn>
              <template v-slot:prepend>
                <v-icon>mdi-pencil</v-icon>
              </template>
              Edit
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              @click="deleteJob(job.id)"
            >
              <template v-slot:prepend>
                <v-icon>mdi-delete</v-icon>
              </template>
              Delete
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-list-item>
</template>

<script setup>
import { formatISO } from '@/helper/datehelper'
import { computed } from 'vue'
import { useEntriesStore } from '@/store/entries'

const store = useEntriesStore()

const TIME_FORMAT = 'H:mm:ss'
const props = defineProps({ job: Object })

const formattedStartTime = computed(() => {
  return formatISO(props.job.start, TIME_FORMAT)
})

const formattedEndTime = computed(() => {
  return formatISO(props.job.end, TIME_FORMAT)
})

const subtitle = computed(() => {
  return formattedStartTime.value + ' - ' + (formattedEndTime.value ?? 'now')
})

const statusIcon = computed(() => {
  return props.job.end ? 'mdi-checkbox-marked-circle-outline' : 'mdi-timer-sand'
})

const statusColor = computed(() => {
  return props.job.end ? 'green' : 'red'
})

function deleteJob(id) {
  store.remove(id)
}
</script>
