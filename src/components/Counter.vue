<template>
  <div>
    <h2>Counter</h2>
    <div>{{ count }}</div>
    <button @click="increment()" >Up counter</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { INCREMENT_COUNTER } from './../store/mutation-types'

export default {
  name: 'Counter',
  props: {},
  methods: {
    ...mapMutations([
      INCREMENT_COUNTER
    ])
  },
  computed: mapState([
    'count'
  ])
  
}
</script>

<style scoped>
</style>
