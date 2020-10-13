;(function () {
  const STORAGE_KEY = 'item-todos'

  const itemStorage = {
    fetch: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save: function () {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      console.log('save:' + localStorage.getItem(STORAGE_KEY))
    },
  }
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

  Vue.directive('app-focus', {
    inserted(el, binding) {
      el.focus()
    },
  })
  const app = new Vue({
    el: '#todoapp',
    data: {
      // items,
      items: itemStorage.fetch(), // 获取本地数据进行初始化
      currentItem: null,
      filterStatus: 'all',
    },

    watch: {
      items: {
        deep: true,
        handler: function (newItems, oldItems) {
          console.log('watch: ' + JSON.stringify(newItems))
          itemStorage.save(newItems)
        },
      },
    },

    directives: {
      'todo-focus': {
        update(el, binding) {
          if (binding.value) {
            el.focus()
          }
        },
      },
    },
    computed: {
      filterItems() {
        switch (this.filterStatus) {
          case 'active':
            return this.items.filter(item => !item.completed)
          case 'completed':
            return this.items.filter(item => item.completed)
          default:
            return this.items
        }
      },
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

        console.log('woshi shui ' + itemStorage.fetch())
      },
      removeItem(index) {
        this.items.splice(index, 1)
      },
      removeCompleted() {
        this.items = this.items.filter(item => !item.completed)
      },
      toEdit(item) {
        this.currentItem = item
      },
      cancelEdit() {
        this.currentItem = null
      },
      finishEdit(item, index, event) {
        const content = event.target.value.trim()

        if (event.target.value.trim() === '') {
          this.removeItem(index)
        }
        item.content = content

        this.currentItem = null
      },
    },
  })

  window.onhashchange = function () {
    console.log('hash改變了', window.location.hash)

    const hash = window.location.hash.substr(2) || 'all'

    console.log('hash: ', hash)

    app.filterStatus = hash
  }

  // 第一次访问页面时,调用一次让状态生效
  window.onhashchange()
})()
