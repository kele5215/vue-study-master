;(function f() {
  const template =
    '            <div class="table-responsive">\n' +
    '              <table class="table table-striped">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>ID</th>\n' +
    '                    <th>姓名</th>\n' +
    '                    <th>年龄</th>\n' +
    '                    <th>出身</th>\n' +
    '                    <th>工资</th>\n' +
    '                    <th>操作</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    // '                  <tr v-for="(emp, index) in empList" :key="emp.id">\n' +
    // '                    <td>{{ emp.id }}</td>\n' +
    // '                    <td>{{ emp.name }}</td>\n' +
    // '                    <td>{{ emp.age }}</td>\n' +
    // '                    <td>{{ emp.placeOfBirth }}</td>\n' +
    // '                    <td>{{ emp.salary }}</td>\n' +
    // '                  </tr>\n' +
    '                  <Item v-for="(emp, index) in empList" :key="emp.id" :emp="emp" :deleteEmp="deleteEmp" :index="index"/>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '            </div>'

  window.HomeList = {
    template,
    props: {
      empList: Array,
      deleteEmp: Function,
    },
    components: {
      Item,
    },
  }
})()
