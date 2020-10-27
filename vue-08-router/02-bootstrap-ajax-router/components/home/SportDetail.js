; (function () {
  const template = `
  <div class="jumbotron">
    <h1>ID:{{id}}</h1>
    <h2>{{sportDetail.title}}</h2>
    <p>{{sportDetail.content}}</p>
  </div>
  `

  window.SportDetail = {
    template,
    data () {
      return {
        id: null,
        sportDetail: {},
      }
    },
    created () {
      this.getReportById()
    },
    methods: {
      getReportById () {
        this.id = this.$route.params.id - 0
        const strURL = 'http://localhost:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json'
        axios
          .get(strURL)
          .then(response => {
            const sportArr = response.data
            this.sportDetail = sportArr.find(detail => {
              return detail.id === this.id
            })
          })
          .catch(error => {
            alert(error.message)
          })
      },
    },

    watch: {
      $route: function () {
        this.getReportById()
        console.log('$router改变了', this.id)
      },
    },
  }
})()
