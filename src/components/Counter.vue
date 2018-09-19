<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment()" >Up counter</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Counter',
  props: {},
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  },
  computed: mapState([
    'count'
  ])
  
}
</script>

<style scoped>
</style>
