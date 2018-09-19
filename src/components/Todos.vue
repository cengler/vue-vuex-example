<template>
  <div>
    <h2>ToDo List</h2>
    <div v-for="t in pendingTodos" :key="t.id">
      {{ t.text }}
    </div>
    <button @click="addTodo">AddTodo</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Todos',
  props: {},
  methods: {
    addTodo () {
      this.$store.commit('addTodo', {text:'new ToDo', done:false})
    }
  },
  computed: mapGetters([
    'pendingTodos'
  ])
  
}
</script>

<style scoped>
</style>
