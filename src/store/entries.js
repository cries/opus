import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useEntriesStore = defineStore('entries', () => {

  const entries = ref([])

  const total = computed(() => {
    return entries.value.length
  })

  const getEntriesByDate = computed(() => {
    return (date) => entries.value.filter((entry) => entry.date === date)
  })

  const lastStillRunning = computed(() => {
    return entries.value.filter((entry) => entry.id === total.value && !!entry.end)
  })

  function add(title, start, end = null) {
    const newEntry = {
      id: total.value + 1,
      title,
      start,
      end
    }

    if (lastStillRunning.value && total.value > 0) {
      stopLast()
    }

    entries.value = [
      newEntry,
      ...entries.value
    ]
  }

  function remove(id) {
    entries.value = entries.value.filter((entry) => {
      return entry.id != id
    })
  }

  function stopLast() {
    const last = entries.value.find((entry) => entry.id === total.value)
    last.end = new Date().toISOString()
  }

  return {
    entries,
    total,
    add,
    remove,
    getEntriesByDate
  }
})
