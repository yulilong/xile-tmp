// 引入相关的样式
require("../less/case.less");

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  }
  return null;
}

var item = getQueryString('item');

var caseList = document.querySelector('.case-list');
var diPingXian = document.querySelector('.dipingxian');
var fute = document.querySelector('.fute');
var guoji = document.querySelector('.guoji');
var jiashi = document.querySelector('.jiashi');
var qinghua = document.querySelector('.qinghua');
if ( item === 'dipingxian') {
  console.log('diPingXian: ', diPingXian.innerHTML)
  diPingXian.innerHTML += '<img src="./static/diping-011.jpg" alt="">';
  diPingXian.innerHTML += '<img src="./static/diping-02.jpg" alt="">';
  diPingXian.innerHTML += '<img src="./static/diping-03.jpg" alt="">';
  diPingXian.innerHTML += '<img src="./static/diping-04.jpg" alt="">';
  diPingXian.innerHTML += '<img src="./static/diping-05.jpg" alt="">';
  diPingXian.innerHTML += '<img src="./static/diping-06.jpg" alt="">';
  diPingXian.style.display = 'block';
} else if ( item === 'fute') {
  fute.innerHTML += '<img src="./static/fute-01.jpg" alt="">';
  fute.innerHTML += '<img src="./static/fute-02.png" alt="">';
  fute.innerHTML += '<img src="./static/fute-03.jpg" alt="">';
  fute.innerHTML += '<img src="./static/fute-04.jpg" alt="">';
  fute.innerHTML += '<img src="./static/fute-05.jpg" alt="">';
  fute.style.display = 'block';
} else if ( item === 'guoji') {
  guoji.innerHTML += '<img src="./static/guoji-01.jpg" alt="">'
  guoji.innerHTML += '<img src="./static/guoji-02.jpg" alt="">'
  guoji.innerHTML += '<img src="./static/guoji-03.jpg" alt="">'
  guoji.innerHTML += '<img src="./static/guoji-04.jpg" alt="">'
  guoji.innerHTML += '<img src="./static/guoji-05.jpg" alt="">'
  guoji.innerHTML += '<img src="./static/guoji-06.jpg" alt="">'
  guoji.style.display = 'block';
} else if ( item === 'jiashi') {
  jiashi.innerHTML += '<img src="./static/jiashi-01.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-02.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-03.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-04.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-05.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-06.jpg" alt="">';
  jiashi.innerHTML += '<img src="./static/jiashi-07.jpg" alt="">';
  jiashi.style.display = 'block';
} else if ( item === 'qinghua') {
  qinghua.innerHTML += '<img src="./static/qianghua-01.jpg" alt="">';
  qinghua.innerHTML += '<img src="./static/qianghua-02.jpg" alt="">';
  qinghua.innerHTML += '<img src="./static/qianghua-03.jpg" alt="">';
  qinghua.innerHTML += '<img src="./static/qianghua-04.jpg" alt="">';
  qinghua.innerHTML += '<img src="./static/qianghua-05.jpg" alt="">';
  qinghua.innerHTML += '<img src="./static/qianghua-06.jpg" alt="">';
  qinghua.style.display = 'block';
} else {
  caseList.style.display = 'block';
}