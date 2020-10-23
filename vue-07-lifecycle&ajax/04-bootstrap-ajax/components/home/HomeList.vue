<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>出身</th>
          <th>工资</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- // '                  <tr v-for="(emp, index) in empList" :key="emp.id">
    // '                    <td>{{ emp.id }}</td>
    // '                    <td>{{ emp.name }}</td>
    // '                    <td>{{ emp.age }}</td>
    // '                    <td>{{ emp.placeOfBirth }}</td>
    // '                    <td>{{ emp.salary }}</td>
    // '                  </tr> -->
        <Item v-for="(emp, index) in empList" :key="emp.id" :emp="emp" :deleteEmp="deleteEmp" :index="index" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from 'components/Item.js'

export default {
  name: 'HomeList',
  props: {
    empList: Array,
    deleteEmp: Function,
  },
  components: {
    Item,
  },
}
</script>
