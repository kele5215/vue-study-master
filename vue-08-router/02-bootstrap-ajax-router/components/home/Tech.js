;(function () {
  const template = `
  <div><!--注意：不要少了根元素-->
    <ul>
      <li v-for="(tech, index) in techArr" :key="tech.id">
<!--        <span> {{tech.title}} </span>-->
        <router-link :to="'/news/tech/detail/' + tech.id">{{tech.title}}</router-link>
        <button class="btn btn-default btn-xs">查看(Push)</button>
        <button class="btn btn-default btn-xs">查看(replace)</button>
      </li>
    </ul>

  <!--详情-->
    <router-view></router-view>
  </div>
  `
  window.Tech = {
    data() {
      return {
        techArr: [],
      }
    },
    created() {
      this.getTechArr()
    },

    methods: {
      getTechArr() {
        const strURI = 'http://localhost:63342/vue-study-master/vue-08-router/02-bootstrap-ajax-router/db/tech.json'
        axios
          .get(strURI)
          .then(response => {
            console.log(response.data, this)
            this.techArr = response.data
          })
          .catch(error => {
            alert(error.message)
          })
      },
    },
    template,
  }
})()
