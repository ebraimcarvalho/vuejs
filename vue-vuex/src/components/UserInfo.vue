<template>
  <div id="app">
    <v-app>
      <v-app-bar app></v-app-bar>
      <v-main>
        <v-container>
          <h1>Employee: {{employee.name}}</h1>
          <h2>Salary: {{parseFloat(employee.salary).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</h2>
          <div>
            <button class="btn" @click="decrementSalary({amount: 1000})">decrement</button>
            <button @click="incrementSalary({amount: 1000})">increment</button>
          </div>
          <h3>Count: {{count}}</h3>
          <div>
            <button @click="countLess({amount: 1})">decrement</button>
            <button @click="countMore(1)">increment</button>
          </div>
          <p>{{something}}</p>
        </v-container>

        <v-spacer></v-spacer>

        <v-container style="max-width: 500px">
          <v-text-field
            v-model="newBook"
            label="Add book to the list"
            solo
            @keydown.enter="create"
          >
            <template v-slot:append>
              <v-fade-transition>
                <v-icon
                  v-if="newBook"
                  @click="create"
                >
                  mdi-playlist-plus
                </v-icon>
              </v-fade-transition>
            </template>
          </v-text-field>

          <h2 class="display-1 success--text">
            Books:&nbsp;
            <v-fade-transition leave-absolute>
              <span :key="`books-${books.length}`">
                {{ books.length }}
              </span>
            </v-fade-transition>
          </h2>

          <v-divider class="mt-4"></v-divider>

          <v-row
            class="my-1"
            align="center"
          >
            <strong class="mx-4 info--text text--darken-2">
              Remaining: {{ remainingBooks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-4 success--text text--darken-2">
              Completed: {{ completedBooks }}
            </strong>

            <v-spacer></v-spacer>

            <v-progress-circular
              :value="progress"
              class="mr-2"
            ></v-progress-circular>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <v-card v-if="books.length > 0">
            <v-slide-x-transition
              class="py-0"
              group
              tag="v-list"
            >
              <v-list-item
                :class="[{['green lighten-1']: book.completed, ['amber darken-1']: !book.completed}]"
                v-for="(book, index) in books" 
                :key="`${index}-${book.name}`"
                @click="toggleBook(index)"
              >
                <span class="white--text">{{book.name}}</span>

                <v-spacer></v-spacer>

                <v-icon
                  color="gray"
                  class="pointer"
                  @click="removeBook(index)"
                >
                  mdi-delete
                </v-icon>
              </v-list-item>
            </v-slide-x-transition>
          </v-card>
        </v-container>

      </v-main>
    </v-app>
  </div>

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'UserInfo',
  components: {
  },
  data: () => ({
    newBook: null,
  }),
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
    ]),
    completedBooks () {
      return this.books.filter(task => task.completed).length
    },
    progress () {
      return this.doneBooksCount / this.books.length * 100
    },
    remainingBooks () {
      return this.books.length - this.completedBooks
    },
  },
  methods: {
    ...mapMutations([
      'incrementCount',
      'decrementCount',
      'incrementSalary',
      'decrementSalary',
      'toggleBook',
      'addBook',
      'removeBook'
    ]),
    ...mapActions([
      'countMore',
      'countLess'
    ]), 
    create () {
      this.addBook({name: this.newBook, completed: false})

      this.newBook = null
    },
  }
}
</script>

<style>
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
