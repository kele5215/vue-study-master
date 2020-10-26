;(function f() {
  const template =
    '<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n' +
    '            <!--右边上半区域-->\n' +
    // '            <h1 class="page-header">Dashboard</h1>\n' +
    '            <slot name="dashboard"></slot>\n' +
    '            <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>' +
    '            <!--右边下半区域-->\n' +
    '            <h2 class="sub-header">Section title</h2>\n' +
    '            <home-list :emp-list="empList" :deleteEmp="deleteEmp"></home-list>\n' +
    '</div>'

  window.AppHome = {
    template, // template: template,
    data: function () {
      return {
        hobbies: ['看书', '台球', '睡觉', '撸代码'],
        // empList: [
        //   { id: 1, name: '小梦1', age: 24, placeOfBirth: '出身地1', salary: 80001 },
        //   { id: 2, name: '小梦2', age: 24, placeOfBirth: '出身地2', salary: 80002 },
        //   { id: 3, name: '小梦3', age: 24, placeOfBirth: '出身地3', salary: 80003 },
        //   { id: 4, name: '小梦4', age: 24, placeOfBirth: '出身地4', salary: 80004 },
        // ],
        empList: [],
      }
    },

    created() {
      const strURI = 'http://localhost:63342/vue-study-master/vue-08-router/02-bootstrap-ajax-router/emp.json'
      axios.get(strURI).then(
        response => {
          console.log(response.data)
          this.empList = response.data
        },
        error => {
          console.log(error.message)
        }
      )
    },

    methods: {
      // 删除指定下标的数据
      // 因为删除 emp 会对 empList 做更新操作，
      // 而 empList 是初始化在当前这个组件里，所以删除的函数要定义在这个组件中
      deleteEmp(index) {
        this.empList.splice(index, 1)
      },
      // 删除爱好
      deleteHobby(index) {
        this.hobbies.splice(index, 1)
      },
    },
    components: {
      // Dashboard 作为AppHome 的子组件
      Dashboard,
      HomeList, // HomeList:HomeList
    },
  }
})()
