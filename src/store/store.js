import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_TODO, INCREMENT_COUNTER} from './mutation-types'

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
    [INCREMENT_COUNTER] (state) {
      state.count++
    },
    [ADD_TODO] (state, todo) {
      state.lastTodoId++
      todo.id = state.lastTodoId
      state.todos.push(todo)
    }
  },
  actions: {
    [ADD_TODO] ({commit}, todo) {
      setTimeout(() => {
        commit(ADD_TODO, todo)
      }, 1000)
    }
  },
  getters: { // computed and catched properties for stores
    pendingTodos: state => {
      return state.todos.filter(todo => !todo.done)
    }
  }
})
