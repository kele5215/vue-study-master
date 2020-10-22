;(function f() {
  const template =
    '<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n' +
    '            <!--右边上半区域-->\n' +
    '            <h1 class="page-header">Dashboard</h1>\n' +
    '            <dashboard></dashboard>' +
    '            <!--右边下半区域-->\n' +
    '            <h2 class="sub-header">Section title</h2>\n' +
    '            <home-list></home-list>\n' +
    '</div>'

  window.AppHome = {
    template, // template: template,
    components: {
      // Dashboard 作为AppHome 的子组件
      Dashboard,
      HomeList, // HomeList:HomeList
    },
  }
})()
