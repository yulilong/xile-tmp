//index页面引用

// 引入相关的样式
require("../less/index.less");

var bannerWrap = document.getElementsByClassName('banner-wrap')[0];
var button = document.querySelectorAll('.banner-btn span');
var browerWidth = getClientWidth(); // 获取浏览器窗口宽度
var wrapWidth = browerWidth*3;     // 轮播容器宽度   3个图片
bannerWrap.style.width = browerWidth*4 + 'px';// banner容器宽度
bannerWrap.style.left = '0px'; // 第一次赋值
////////////////

window.timer = setInterval(move, 3000);
addHeaderOnResize();
for (var i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    bannerWrap.style.left = -browerWidth * this.getAttribute('data-index') + 'px';
    tog(this.getAttribute('data-index'))
    clearInterval(window.timer);
    window.timer = setInterval(move, 3000);
  };
}

///////////////////////////
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
  wrapWidth = browerWidth*3;
  bannerWrap.style.width = browerWidth*4 + 'px';// banner容器宽度
  if (width !== 0) {
    // 调整轮播偏移量
    var count = parseInt(bannerWrap.style.left)/ width;
    this.bannerWrap.style.left = count * browerWidth + 'px';
  }
}
// 浏览器窗口变化
function addHeaderOnResize() {
  // 浏览器大小发生变化:事件绑定， 重置轮播的大小
  window.onresize = function () {
    console.log(addHeaderOnResize);
    setWidth();
  };
}
function move() {
  console.log(1111);
  if (parseInt(bannerWrap.style.left) > -wrapWidth) {
    bannerWrap.style.left = parseInt(bannerWrap.style.left) - browerWidth + 'px';
    bannerWrap.style.transition = 'left 1s';
    tog(-parseInt(bannerWrap.style.left)/browerWidth);
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


