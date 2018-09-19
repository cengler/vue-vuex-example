import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export const store = new Vuex.Store({
  state: {
    count: 0,
    lastTodoId: 2,
    todos: [
      { id: 1, text: 'Done ToDo', done: true },
      { id: 2, text: 'Old ToDo', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addTodo(state, todo) {
      state.lastTodoId++
      todo.id = state.lastTodoId
      state.todos.push(todo)
    }
  },
  getters: { // computed and catched properties for stores
    pendingTodos: state => {
      return state.todos.filter(todo => !todo.done)
    }
  }
})
