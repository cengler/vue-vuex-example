<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment()" >Up counter</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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
