new Vue({
  el: '#desafio',
  data: {
    name: 'Ebraim',
    idade: 29,
    img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1',
  },
  methods: {
    random() {
      return Math.random()
    }
  }
})