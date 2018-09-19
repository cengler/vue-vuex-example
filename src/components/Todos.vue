<template>
  <div>
    <h2>ToDo List</h2>
    <div v-for="t in pendingTodos" :key="t.id">
      {{ t.text }}
    </div>
    <button @click="addTodoLocal">AddTodo</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ADD_TODO } from './../store/mutation-types'

export default {
  name: 'Todos',
  props: {},
  methods: {
    ...mapActions([
      ADD_TODO
    ]),
    addTodoLocal () {
      this[ADD_TODO]({text:'new ToDo', done:false})
    }
  },
  computed: mapGetters([
    'pendingTodos'
  ])
  
}
</script>

<style scoped>
</style>
