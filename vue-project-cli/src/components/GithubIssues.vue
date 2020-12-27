<template>
  <div class="container-fluid">
    <h2>Vue JS + Github Issues</h2>
    <p>Página que lista issues de repositórios do Github usando Vue JS.</p>

    <div class="d-flex justify-content-center">
      <div class="input-group mb-3 input-control mr-4">
        <input @input="change" 
          v-model="username" 
          type="text" 
          placeholder="username (e.g. vuejs)" 
          class="form-control" 
          aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3 input-control">
        <input @keyup.enter="go"
          @input="change"
          v-model="repository"
          type="text"
          placeholder="repository (e.g. vue)"
          class="form-control" 
          aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
    </div>
    
    <div class="d-flex justify-content-center">
      <button class="btn btn-success btn-control mr-4" @click.stop.prevent="go">GO</button>
      <button class="btn btn-danger btn-control" @click.stop.prevent="reset">Limpar</button>
    </div>

    <div class="mt-4" v-if="erro">
      <p class="alert alert-warning">{{erro}}</p>
    </div>

    <div class="mt-4" v-if="loader.getIssues">
      <img src="../../static/loading.svg" alt="loading">
    </div>

    <div class="text-left mt-4" v-if="issues.length">
      <h4 v-if="loader.title">
          Listando Issues do Usuário: <strong>{{username}}</strong>
           | Repositório: <strong>{{repository}}</strong>
      </h4>
      <div class="text-left mt-4" v-if="issues">
        <ul class="list-group">
          <li class="list-group-item" v-for="(item, index) in issues" :key="index">{{item.title}}
            <router-link
                :to="{name: 'GithubIssue', params:
                {name: username,
                repo: repository,
                issue: item.number}}">
                #{{item.number}}
            </router-link>
          <img v-if="item.is_loading" src="../../static/loading.svg" alt="loading" height="20">
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-4" v-if="!issues.length && noIssues">
      <p class="alert alert-info">Não existe issues para este usuário/repositório!</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.getLocalData();
  },
  name: 'GithubIssues',
  data() {
    return {
      username: '',
      repository: '',
      erro: '',
      issues: [],
      selectedIssue: {},
      noIssues: false,
      loader: {
        getIssues: false,
        getIssue: false,
      },
    };
  },
  methods: {
    async go() {
      if (!this.username && !this.repository) {
        this.erro = 'Digite o usuário e o repositório para buscar as issues!';
        return null;
      }
      try {
        localStorage.setItem('userData', JSON.stringify({ username: this.username, repository: this.repository }));
        this.loader.getIssues = true;
        const url = `https://api.github.com/repos/${this.username}/${this.repository}/issues`;
        const res = await axios.get(url);
        const data = await res.data;
        this.issues = data;
        if (!data.length) this.noIssues = true;
        this.loader.title = true;
      } catch (e) {
        this.erro = 'Usuário/Repositório não existe!';
        this.issues = [];
      } finally {
        this.loader.getIssues = false;
      }
      return null;
    },
    reset() {
      this.username = '';
      this.repository = '';
      this.issues = [];
      this.erro = '';
      this.selectedIssue = {};
      localStorage.removeItem('userData');
    },
    change() {
      this.erro = '';
      this.loader.title = false;
      this.noIssues = false;
      this.issues = [];
    },
    clearIssue() {
      this.selectedIssue = {};
      this.noIssues = false;
    },
    getLocalData() {
      const localData = JSON.parse(localStorage.getItem('userData'));
      if (localData) {
        this.username = localData.username;
        this.repository = localData.repository;
        this.go();
      }
    },
  },
};
</script>

<style scoped>
  .input-control {
    max-width: 400px;
  }
  .btn-control {
    width: 100px;
  }
</style>