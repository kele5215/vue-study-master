; (function () {
  const template = `  <!--体育栏目-->
    <div>
        <ul>
            <li v-for="(sport, index) in sportArr" :key="sport.id">
                <!--注意： to 中是JS表达式，就需要使用 v-bind绑定 to属性，即 :to
                    注意单引号不要少了 ''
                -->
                <router-link :to="'/news/sport/detail/' + sport.id">
                 {{sport.title}}
                </router-link>
            </li>

        </ul>
        <!--详情 渲染出SportDetail组件-->
        <router-view></router-view>
    </div>  `

  window.Sport = {
    data () {
      return {
        sportArr: [],
      }
    },
    created () {
      this.getSportArr()
    },

    methods: {
      getSportArr () {
        const strURI = 'http://localhost:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json'
        axios
          .get(strURI)
          .then(response => {
            console.log(response.data, this)
            this.sportArr = response.data
          })
          .catch(error => {
            alert(error.message)
          })
      },
    },
    template,
  }
})()
