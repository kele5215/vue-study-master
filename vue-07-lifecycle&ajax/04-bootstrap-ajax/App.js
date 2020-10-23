; (function () {
  const template =
    '    <div>\n' +
    '      <!--头部导航区域-->\n' +
    '      <app-navbar></app-navbar>\n' +
    '\n' +
    '      <!--核心区域:分左右两边-->\n' +
    '      <div class="container-fluid">\n' +
    '        <div class="row">\n' +
    '          <!--左边菜单栏区域-->\n' +
    '          <app-leaf></app-leaf>\n' +
    '\n' +
    '          <!--右边主页面区域: 分上下两个区域-->\n' +
    '          <app-home>\n' +
    '             <h1 slot="dashboard" class="page-header">{{title}}</h1>\n' +
    '          </app-home>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>'

  window.App = {
    data () {
      return {
        title: '仪表盘',
      }
    },
    template,
    components: {
      AppNavbar, // 等价于 AppNavbar: AppNavbar
      AppLeaf,
      AppHome,
    },
  }
})()
