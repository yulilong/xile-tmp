// 引入相关的样式
require("../less/partner.less");
require("./cooperative.js")


function setFooterBottom(content, footer) {
  function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  var browserHeight = Number(getWindowHeight());      // 浏览器宽度
  var footHeight = Number(footer.offsetHeight);       // 脚部高度
  var contentHeight = Number(content.offsetHeight);   // 内容高度
  // 设置内容高度
  function setHeight() {
    browserHeight = Number(getWindowHeight());
    if (browserHeight > contentHeight) {
      content.style.minHeight = browserHeight - footHeight + 'px';
    } else {
      content.style.minHeight = '';
    }
  }
  setHeight();
  window.addEventListener('resize', setHeight);
}


// 执行代码
var content = document.querySelector('.content');
var footer = document.querySelector('.footer');
setFooterBottom(content, footer);