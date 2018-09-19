<template>
  <div>
    <div>{{ this.count }}</div>
    <button @click="increment()" >Up counter</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<style scoped>
</style>
