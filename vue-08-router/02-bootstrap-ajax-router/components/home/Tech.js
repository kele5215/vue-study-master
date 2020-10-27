; (function () {
  const template = `
  <div><!--注意：不要少了根元素-->
    <ul>
      <li v-for="(tech, index) in techArr" :key="tech.id">
<!--        <span> {{tech.title}} </span>-->
        <router-link :to="'/news/tech/detail/' + tech.id">{{tech.title}}</router-link>
        <button class="btn btn-default btn-xs" @click="pushTech(tech.id)">查看(Push)</button>
        <button class="btn btn-default btn-xs" @click="replaceTech(tech.id)">查看(replace)</button>
      </li>
    </ul>
    <button @click="$router.back()">后退</button>
  <!--详情-->
    <router-view></router-view>
  </div>
  `
  window.Tech = {
    data () {
      return {
        techArr: [],
      }
    },
    created () {
      this.getTechArr()
    },

    methods: {
      pushTech (id) {
        // push 可后退回来
        // 是 $router , 有字母 r 路由器。用的反单引号 ` ` 拼接
        // this.$route.push('news/tech/detail/${id}')
        this.$router.push(`/news/tech/detail/${id}`)
      },

      replaceTech (id) {
        // replace 不可后退回来
        //this.$routerouter.replace('news/tech/detail/${id}')
        this.$router.replace(`/news/tech/detail/${id}`)
      },
      getTechArr () {
        const strURI = 'http://localhost:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json'
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
