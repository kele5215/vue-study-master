; (function () {
  const template = `
  <div class="jumbotron">
      <h1>ID:{{id}}</h1>
      <h2>{{techDetail.title}}</h2>
      <p>{{techDetail.content}}</p>
  </div>
  `

  window.TechDetail = {
    template,
    data () {
      return {
        id: null,
        techDetail: {},
      }
    },
    created () {
      this.getTechById()
    },
    methods: {
      getTechById () {
        this.id = this.$route.params.id - 0
        const strURL = 'http://localhost:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json'
        axios
          .get(strURL)
          .then(response => {
            const techArr = response.data
            this.techDetail = techArr.find(detail => {
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
        this.getTechById()
        console.log('$router改变了', this.id)
      },
    },
  }
})()
