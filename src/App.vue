<template>
  <router-view />
</template>

<script setup>
import { useEntriesStore } from '@/store/entries'

const store = useEntriesStore()
</script>
