<template>
  <div>
    <div class="mt-4" v-if="loader.getIssue">
      <img src="../../static/loading.svg" alt="loading">
    </div>

    {{erro}}

    <div class="text-left mx-4">
      <h4 class="mt-4">Username: <strong>{{username}}</strong>
        | Repo: <strong>{{repo}}</strong>
         Issue: <strong>#{{issueNumber}}</strong>
      </h4>
      <div class="my-4" markdown="1">{{issue.body}}</div>
      <a class="btn btn-primary" :href="issue.html_url" target="_blank">Ir para Github</a>

      <router-link class="btn btn-warning" :to="{name: 'GithubIssues'}">Voltar</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    const [username, repo, issueNumber] = [this.$route.params.name,
      this.$route.params.repo,
      this.$route.params.issue];
    this.goIssue(username, repo, issueNumber);
  },
  name: 'GithubIssues',
  data() {
    return {
      issue: {},
      erro: '',
      username: '',
      repo: '',
      issueNumber: '',
      loader: {
        getIssue: false,
      },
    };
  },
  methods: {
    async goIssue(username, repo, issueNumber) {
      try {
        [this.username, this.repo, this.issueNumber] = [username, repo, issueNumber];
        this.loader.getIssue = true;
        const url = `https://api.github.com/repos/${username}/${repo}/issues/${issueNumber}`;
        const res = await axios.get(url);
        const data = await res.data;
        this.erro = '';
        this.issue = data;
      } catch (e) {
        this.erro = e.message;
      } finally {
        this.loader.getIssue = false;
      }
      return null;
    },
  },
};
</script>
