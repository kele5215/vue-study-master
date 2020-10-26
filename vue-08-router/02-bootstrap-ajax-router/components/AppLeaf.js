;(function () {
  const template =
    '<div class="col-sm-3 col-md-2 sidebar">\n' +
    '            <ul class="nav nav-sidebar">\n' +
    // '              <li class="active">\n' +
    '                <router-link  to="/" tag="li" exact>\n' +
    '                  <a>{{message}}</a>\n' +
    '                  <span class="sr-only">(current)</span>\n' +
    '                </router-link>\n' +
    // '              </li>\n' +
    // '              <li><router-link to="/news">新闻</router-link></li>\n' +
    // '              <li><router-link to="/about">关于</router-link></li>\n' +
    '              <router-link to="/news" tag="li"><a>新闻</a></router-link>\n' +
    '              <router-link to="/about" tag="li"><a>关于</a></router-link>\n' +
    '              <li><a href="#">Export</a></li>\n' +
    '            </ul>\n' +
    '            <ul class="nav nav-sidebar">\n' +
    '              <li><a href="">Nav item</a></li>\n' +
    '              <li><a href="">Nav item again</a></li>\n' +
    '              <li><a href="">One more nav</a></li>\n' +
    '              <li><a href="">Another nav item</a></li>\n' +
    '              <li><a href="">More navigation</a></li>\n' +
    '            </ul>\n' +
    '            <ul class="nav nav-sidebar">\n' +
    '              <li><a href="">Nav item again</a></li>\n' +
    '              <li><a href="">One more nav</a></li>\n' +
    '              <li><a href="">Another nav item</a></li>\n' +
    '            </ul>\n' +
    '          </div>'

  window.AppLeaf = {
    template,
    data: function () {
      return {
        message: '首页',
      }
    },
  }
})()
