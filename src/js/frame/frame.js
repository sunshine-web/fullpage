import move from './move/move'
import wheelCallback from './wheel/callback'

export default function () {
  var arrow = document.querySelector('#head-wrap .head .arrow')
  var liNodes = document.querySelectorAll('#head-wrap .head .nav li')
  var contentNode = document.querySelector('#content')
  var contentLiNodes = document.querySelectorAll('#content > .list > li')
  var pointLiNodes = document.querySelectorAll('#content .points li')
  var home = liNodes[0]

  arrow.style.left = (home.offsetLeft + (home.offsetWidth / 2) + (arrow.offsetWidth / 2)) + "px";
  for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].index = i;
    pointLiNodes[i].index = i;
    liNodes[i].onclick = pointLiNodes[i].onclick = function () {
      move(this.index)
    }
  }

  //设置内容区的ul的高度，li拿到content的高度把ul撑开
  contentLiNodes.forEach((liNode) => {
    liNode.style.height = contentNode.offsetHeight + 'px'
  })

  //鼠标滚轮
  contentNode.index = 0
  var timer = ''
  if (contentNode.addEventListener) {
    contentNode.addEventListener('DOMMouseScroll', (event) => {
      clearInterval(timer)
      timer = setTimeout(function () {
        wheelCallback(event, contentNode.index)//柯里化就是给函数预定一些参数，函数的两个参数完全是两个函数来给的，一个是回调给的，一个是它自己去找的。
      }, 300)
    })
  }
  contentNode.onmousewheel = (event) => {
    clearInterval(timer)
    timer = setTimeout(function () {
      wheelCallback(event, contentNode.index)
    }, 300)
  }

}

//防抖节流用的定时器，函数节流，回调中套定时器，先清除定时器。

