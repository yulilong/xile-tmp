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
  // ./images/case/dipingxian/diping-011.jpg 编译后：images/diping-011.jpg
  diPingXian.innerHTML += '<img src="images/diping-011.jpg" alt="">';
  diPingXian.innerHTML += '<img src="images/diping-02.jpg" alt="">';
  diPingXian.innerHTML += '<img src="images/diping-03.jpg" alt="">';
  diPingXian.innerHTML += '<img src="images/diping-04.jpg" alt="">';
  diPingXian.innerHTML += '<img src="images/diping-05.jpg" alt="">';
  diPingXian.innerHTML += '<img src="images/diping-06.jpg" alt="">';
  diPingXian.style.display = 'block';
} else if ( item === 'fute') {
  fute.innerHTML += '<img src="images/fute-01.jpg" alt="">';
  fute.innerHTML += '<img src="images/fute-02.png" alt="">';
  fute.innerHTML += '<img src="images/fute-03.jpg" alt="">';
  fute.innerHTML += '<img src="images/fute-04.jpg" alt="">';
  fute.innerHTML += '<img src="images/fute-05.jpg" alt="">';
  fute.style.display = 'block';
} else if ( item === 'guoji') {
  guoji.innerHTML += '<img src="images/guoji-01.jpg" alt="">'
  guoji.innerHTML += '<img src="images/guoji-02.jpg" alt="">'
  guoji.innerHTML += '<img src="images/guoji-03.jpg" alt="">'
  guoji.innerHTML += '<img src="images/guoji-04.jpg" alt="">'
  guoji.innerHTML += '<img src="images/guoji-05.jpg" alt="">'
  guoji.innerHTML += '<img src="images/guoji-06.jpg" alt="">'
  guoji.style.display = 'block';
} else if ( item === 'jiashi') {
  jiashi.innerHTML += '<img src="images/jiashi-01.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-02.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-03.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-04.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-05.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-06.jpg" alt="">';
  jiashi.innerHTML += '<img src="images/jiashi-07.jpg" alt="">';
  jiashi.style.display = 'block';
} else if ( item === 'qinghua') {
  qinghua.innerHTML += '<img src="images/qianghua-01.jpg" alt="">';
  qinghua.innerHTML += '<img src="images/qianghua-02.jpg" alt="">';
  qinghua.innerHTML += '<img src="images/qianghua-03.jpg" alt="">';
  qinghua.innerHTML += '<img src="images/qianghua-04.jpg" alt="">';
  qinghua.innerHTML += '<img src="images/qianghua-05.jpg" alt="">';
  qinghua.innerHTML += '<img src="images/qianghua-06.jpg" alt="">';
  qinghua.style.display = 'block';
} else {
  caseList.style.display = 'block';
}