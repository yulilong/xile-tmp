// 引入相关的样式
require("../less/contact.less");
import setFooter from './setFooter';

// 执行代码
var content = document.querySelector('.content');
var footer = document.querySelector('.footer');
// 当高度不足以撑满页面时，设置footer在页面底部。
setFooter.setFooterBottom(content, footer);