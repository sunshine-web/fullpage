// import "@babel/polyfill"
/*import "./frame/frame"
import "./business/home"
import "./business/about"
import "./business/team"*/

import frameFn from './frame/frame'
//import homeFn from './business/home'等开机动画完成后再调
import aboutFn from './business/about'
import teamFn from './business/team'
//import inOutAn from './business/inOutAn'
import bigCover from './business/bigCover'

window.onload = function(){
  frameFn()
  //homeFn()
  aboutFn()
  teamFn()
  //测试进出场
  /*inOutAn[4].outAn()
  setTimeout(function () {
    inOutAn[4].inAn()
  },1000)*/
  bigCover()
}

window.onresize = function () {
  var arrow = document.querySelector('#head-wrap .head .arrow')
  var liNodes = document.querySelectorAll('#head-wrap .head .nav li')
  var contentNode = document.querySelector('#content')
  var contentLiNodes = document.querySelectorAll('#content > .list > li')
  var home = liNodes[0]
  //重新计算li的高度
  contentLiNodes.forEach((liNode) => {
    liNode.style.height = contentNode.offsetHeight + 'px'
  })
  //切换箭头
  arrow.style.left = (home.offsetLeft + (home.offsetWidth / 2) + (arrow.offsetWidth / 2)) + "px";
}
