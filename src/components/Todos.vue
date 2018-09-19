<template>
  <div>
    <div v-for="t in doneTodos" :key="t.id">
      {{ t.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Todos',
  props: {},
  methods: {
  },
  computed: mapGetters([
    'doneTodos'
  ])
  
}
</script>

<style scoped>
</style>
