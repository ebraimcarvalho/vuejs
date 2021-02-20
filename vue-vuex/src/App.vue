<template>
  <div id="app">
    <h1>Employee: {{employee.name}}</h1>
    <h2>Salary: {{parseFloat(employee.salary).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</h2>
    <div>
      <button @click="decrementSalary({amount: 1000})">decrement</button>
      <button @click="incrementSalary({amount: 1000})">increment</button>
    </div>
    <hr>
    <h3>Count: {{count}}</h3>
    <div>
      <button @click="decrementCount({amount: 1})">decrement</button>
      <button @click="incrementCount(1)">increment</button>
    </div>
    <p>{{something}}</p>

    <div>
      <h3>Lista de livros: {{books.length}}</h3>
      <div class="grid">
        <div 
          :class="[{completed: book.completed, incompleted: !book.completed}, 'card']" 
          v-for="(book, index) in books" 
          :key="`${index}-${book.name}`"
          @dblclick="toggleBook(index)"
        >
          {{book.name}}
        </div>
      </div>
    </div>

    <div>
      <h3>Livros lidos: {{doneBooksCount}}</h3>
      <ul>
        <li v-for="(book, index) in doneBooks" :key="`${index}-${book.name}`">{{book.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  computed: {
    something() {
      return 'something'
    },
    ...mapState([
      'count',
      'employee',
      'books'
    ]),
    ...mapGetters([
      'doneBooks',
      'doneBooksCount'
    ])
  },
  methods: {
    ...mapMutations([
      'incrementCount',
      'decrementCount',
      'incrementSalary',
      'decrementSalary',
      'toggleBook',
    ]),
    add() {
      this.incrementCount()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 80px 80px;
  gap: 20px;
}

.card {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  user-select: none;
  cursor: pointer;
}

.completed {
  background-color: green;
}

.incompleted {
  background-color: orange;
}

</style>
