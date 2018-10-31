//index页面引用

// 引入相关的样式
require("../less/index.less");
require("./cooperative.js")

var bannerWrap = document.getElementsByClassName('banner-wrap')[0];
var button = document.querySelectorAll('.banner-btn span');
var browerWidth = getClientWidth(); // 获取浏览器窗口宽度
var minWidth = 1200;                // 页面最小宽度
// 如果浏览器宽度小于页面最小宽度，那么轮播宽度则设置为页面最小宽度
if (browerWidth < minWidth) {
  browerWidth = minWidth;
}
var wrapWidth = browerWidth*3;     // 轮播容器宽度   3个图片
bannerWrap.style.width = browerWidth*4 + 'px';// banner容器宽度
bannerWrap.style.left = '0px';  // 第一次赋值
var moveTime = 5000;            // 设置多久移动一次

// 给按钮添加活动样式
function tog(index) {
    if (index > 2) {
        tog(0);
        return;
    }
    for (var i = 0; i < button.length; i++) {
        button[i].className = '';
    }
    button[index].className = 'active';
}

// 设置宽度
function setWidth() {
  var width = browerWidth;
  browerWidth = getClientWidth();
  // 如果浏览器宽度小于页面最小宽度，那么轮播宽度则设置为页面最小宽度
  if (browerWidth < minWidth) {
    browerWidth = minWidth;
  }
  wrapWidth = browerWidth*3;
  bannerWrap.style.width = browerWidth*4 + 'px';// banner容器宽度
  
  if (width !== 0) {
    // 调整轮播偏移量
    var count = parseInt(bannerWrap.style.left)/ width;
    bannerWrap.style.left = count * browerWidth + 'px';
  }
}
// 浏览器窗口变化
function addHeaderOnResize() {
  // 浏览器大小发生变化:事件绑定， 重置轮播的大小
  window.onresize = function () {
    var width = getClientWidth();
      // 只有宽度大于1200px才设置
      if(width >= 1200) {
        setWidth();
      }
  };
}
function move() {
  // 如果没有移动到最后一张
  if (parseInt(bannerWrap.style.left) > -wrapWidth) {
    // 向左边移动一张图片
    bannerWrap.style.left = parseInt(bannerWrap.style.left) - browerWidth + 'px';
    // 设置移动时间
    bannerWrap.style.transition = 'left 1s';
    // 设置提示点为活动样式
    tog(-parseInt(bannerWrap.style.left)/browerWidth);
    // 最后一张图片移动结束后，迅速切换回原点
    if (parseInt(bannerWrap.style.left) <= -wrapWidth) {
      setTimeout(function () {
        tog(0);
        bannerWrap.style.left = '0px';
        bannerWrap.style.transition = 'left 0s';
      }, 1000);
    }
  } else {
    bannerWrap.style.left = '0px';
    bannerWrap.style.transition = 'left 0s';
  }
}

function getClientWidth(){
  var clientWidth = 0, bodyClientWidth = 0, documentClientWidth = 0;
  if(document.body){ bodyClientWidth = document.body.clientWidth; }
  if(document.documentElement){
    documentClientWidth = document.documentElement.clientWidth;
  }
  clientWidth = (bodyClientWidth - documentClientWidth > 0) ? bodyClientWidth : documentClientWidth;
  return clientWidth;
}


////////////////
// 代码执行
window.timer = setInterval(move, moveTime);
addHeaderOnResize();
// 轮播按钮添加点击事件
for (var i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    bannerWrap.style.left = -browerWidth * this.getAttribute('data-index') + 'px';
    tog(this.getAttribute('data-index'))
    clearInterval(window.timer);
    window.timer = setInterval(move, moveTime);
  };
}

///////////////////////////
