import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    employee: {
      name: 'Ebraim Carvalho',
      salary: 49000
    },
    books: [
      {name: 'Pai Rico, Pai Pobre', completed: true},
      {name: 'The Little Books that beats the market', completed: false},
      {name: 'Afeto Revolution', completed: false},
      {name: 'Vue js', completed: true}
    ]
  },
  mutations: {
    incrementCount(state, amount) {
      state.count += amount
    },
    decrementCount(state, payload) {
      if(state.count > 0) {
        state.count -= payload.amount
      }
      return state.count
    },
    incrementSalary(state, payload) {
      state.employee.salary += payload.amount
    },
    decrementSalary(state, payload) {
      if(state.employee.salary > 0) {
        state.employee.salary -= payload.amount
      }
      state.employee.salary
    },
    toggleBook(state, index) {
      state.books[index].completed = !state.books[index].completed
    },
    addBook(state, book) {
      state.books = [...state.books, book]
    },
    removeBook(state, index) {
      state.books.splice(index, 1)
    }
  },
  actions: {
    countMore({commit}, amount) {
      commit('incrementCount', amount)
    },
    countLess({commit}, payload) {
      commit('decrementCount', payload)
    }
  },
  getters: {
    doneBooks: state => state.books.filter(book => book.completed),
    doneBooksCount: (state, getters) => getters.doneBooks.length
  }
})

export default store;