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
  diPingXian.style.display = 'block';
} else if ( item === 'fute') {
  fute.style.display = 'block';
} else if ( item === 'guoji') {
  guoji.style.display = 'block';
} else if ( item === 'jiashi') {
  jiashi.style.display = 'block';
} else if ( item === 'qinghua') {
  qinghua.style.display = 'block';
} else {
  caseList.style.display = 'block';
}