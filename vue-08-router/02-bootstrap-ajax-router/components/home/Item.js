;(function () {
  const template =
    '  <tr>\n' +
    '    <td>{{ emp.id }}</td>\n' +
    '    <td>{{ emp.name }}</td>\n' +
    '    <td>{{ emp.age }}</td>\n' +
    '    <td>{{ emp.placeOfBirth }}</td>\n' +
    '    <td>{{ emp.salary }}</td>\n' +
    '    <td><a href="#" @click="deleteItem">删除</a></td>\n' +
    '  </tr>'

  window.Item = {
    props: {
      emp: {
        type: Object,
        required: true,
      },
      deleteEmp: Function,
      index: Number,
    },
    methods: {
      deleteItem() {
        // TODO 没有看明白 这地方的单引号 是如何打出来的
        if (window.confirm(`确定删除${this.emp.name}的记录吗？`)) {
          this.deleteEmp(this.index)
        }
      },
    },
    template,
  }
})()
