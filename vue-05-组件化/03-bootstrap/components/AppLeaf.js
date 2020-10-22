;(function () {
  const template =
    '<div class="col-sm-3 col-md-2 sidebar">\n' +
    '            <ul class="nav nav-sidebar">\n' +
    '              <li class="active">\n' +
    '                <a href="#">\n' +
    '                  {{message}}\n' +
    '                  <span class="sr-only">(current)</span>\n' +
    '                </a>\n' +
    '              </li>\n' +
    '              <li><a href="#">Reports</a></li>\n' +
    '              <li><a href="#">Analytics</a></li>\n' +
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
        message: 'navbar1-test',
      }
    },
  }
})()
