import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'Todo1', done: true },
      { id: 2, text: 'Todo2', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: { // computed and catched properties for stores
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
