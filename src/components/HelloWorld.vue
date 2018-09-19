<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment()" >Up counter</button>
  </div>
</template>

<script>
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
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>
</style>
