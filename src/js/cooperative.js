
// 定义一些变量

// 容器
// var contentShow = document.getElementsByClassName('content-show')[0];
var contentShow = document.querySelector('.cooperative .content-show');

// var browerWidth = 1128; // 展示内容容器的宽度
var picWidth = 282;         // 每张图片大小
var picTotal = 15;          // 总共有多少张图片
var totalWidth = picWidth*picTotal;     // 轮播容器宽度   14个图片每个图片282
var moveTime2 = 4000;            // 设置多久移动一次
var origin = -picWidth + 'px'
contentShow.style.left = origin;  // 第一次赋值, 解决第一次 .left没有值问题
console.log('contentShow.style.left: ', contentShow.style.left);
// 点击左边按钮
window.clickLeft = function (e) {
  clearInterval(window.time2);
  // 如果在原点
  if (parseInt(contentShow.style.left) <= parseInt(origin)) {
    // 向右边移动一张图片
    contentShow.style.left = parseInt(contentShow.style.left) + picWidth + 'px';
    // 设置移动时间
    contentShow.style.transition = 'left 1s';
    // 第二张图片移动结束后，迅速切换到第十四张图片
    if (parseInt(contentShow.style.left) >= 0) {
      setTimeout(function () {
        contentShow.style.left = -totalWidth + picWidth;
        contentShow.style.transition = 'left 0s';
      }, 1000);
    }
  }
  window.time2 = setInterval(move2, moveTime2);
}
// 点击右边按钮
window.clickRight = function (e) {
  clearInterval(window.time2);
  move2();
  window.time2 = setInterval(move2, moveTime2);
}

// 移动函数
function move2() {
  // 如果没有移动到最后一张
  if(parseInt(contentShow.style.left) > -totalWidth) {
    // 向左边移动一张图片
    contentShow.style.left = parseInt(contentShow.style.left) - picWidth + 'px';
    // 设置移动时间
    contentShow.style.transition = 'left 1s';
    // 最后一张图片移动结束后，迅速切换回原点
    if (parseInt(contentShow.style.left) <= -totalWidth) {
      setTimeout(function () {
        contentShow.style.left = origin;
        contentShow.style.transition = 'left 0s';
      }, 1000);
    }
  } else {
    contentShow.style.left = origin;
    contentShow.style.transition = 'left 0s';
  }
}


////////////////
// 代码执行
window.time2 = setInterval(move2, moveTime2);

///////////////////////////