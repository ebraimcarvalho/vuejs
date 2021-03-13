export default {
  name: "ListSolicitations",
  components: { HeaderDefault, TableListSolicitations, ModalDefault, ModalLoading, FilterDefault },
  computed: {
     ...mapState({
       count: state => state.user.count
     }),
    ...mapGetters({
      count: 'list/countDone'
    })
  },
  data() {
    return {
      modal: false,
      loading: false,
      fields: 'fairs',
    };
  },
  methods: {
    ...mapMutations('list', {
      increment: 'INCREMENT'
    }),
    ...mapActions({
      add: 'list/add'
    }),
}
}