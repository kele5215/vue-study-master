;(function () {
  // 初始化任务
  const items = [
    // {
    //   id: 1,
    //   content: 'vue.js',
    //   completed: false, // 是否完成
    // },
    // {
    //   id: 2,
    //   content: 'java',
    //   completed: true,
    // },
    // {
    //   id: 3,
    //   content: 'python',
    //   completed: false,
    // },
  ]
  const app = new Vue({
    el: '#todoapp',
    data: {
      items,
    },
    computed: {
      remaining() {
        // return this.items.filter(function (item) {
        //   return !item.completed
        // }).length
        // ES6 箭头函数
        return this.items.filter(item => !item.completed).length
      },
      toggleAll: {
        get() {
          console.log(this.remaining)
          return this.remaining === 0
        },
        set(newStatus) {
          console.log(newStatus)
          this.items.forEach(item => {
            item.completed = newStatus
          })
        },
      },
    },
    methods: {
      addItem(event) {
        console.log('addItem', event.target.value)
        // 1. 获取文本框输入的数据
        const content = event.target.value.trim()
        // 2. 判断数据如果为空，则什么都不做
        if (content.length) {
        }

        // 3.如果不为空，则添加到数组中
        // 生成id值
        const id = this.items.length + 1
        this.items.push({
          id,
          content,
          completed: false,
        })
        // 4. 清空文本框内容
        event.target.value = ''
      },
      removeItem(index) {
        this.items.splice(index, 1)
      },
    },
  })
})()
