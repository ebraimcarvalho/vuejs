import Vue from 'vue';
import Router from 'vue-router';
import GithubIssues from '@/components/GithubIssues';
import GithubIssue from '@/components/GithubIssue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GithubIssues',
      component: GithubIssues,
    },
    {
      path: '/:name/:repo/:issue',
      name: 'GithubIssue',
      component: GithubIssue,
    },
  ],
  mode: 'history',
});
