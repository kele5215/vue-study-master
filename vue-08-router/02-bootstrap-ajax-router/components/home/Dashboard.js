;(function f() {
  const template =
    '            <div class="row placeholders">\n' +
    '              <div v-for="(hobby,index) in hobbies" class="col-xs-6 col-sm-3 placeholder">\n' +
    '                <img\n' +
    '                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="\n' +
    '                  width="200"\n' +
    '                  height="200"\n' +
    '                  class="img-responsive"\n' +
    '                  alt="Generic placeholder thumbnail"\n' +
    '                />\n' +
    '                <h4>{{hobby}}</h4>\n' +
    '                <span class="text-muted"><a href="#" @click="deleteHobby">删除</a></span>\n' +
    '              </div>\n' +
    '            </div>'

  window.Dashboard = {
    // 声明当前子组件接收父组件的属性
    props: ['hobbies'],

    methods: {
      deleteHobby(index) {
        // 触发父组件中 delete_hobby 事件进行删除操作
        this.$emit('delete_hobby', index)
      },
    },

    template,
  }
})()
