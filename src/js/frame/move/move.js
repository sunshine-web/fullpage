import inOutArr from '../../business/inOutAn'
var preIndex = 0
export default function (index) {
  var arrow = document.querySelector('#head-wrap .head .arrow')
  var liNodes = document.querySelectorAll('#head-wrap .head .nav li')
  var contentNode = document.querySelector('#content')
  var contentul = document.querySelector('#content .list')
  var pointLiNodes = document.querySelectorAll('#content .points li')

  //出入场
  inOutArr[index].inAn()
  inOutArr[preIndex].outAn()

  //在每次点击导航 或 小圆点时要同步content的index
  contentNode.index = index

  //切换nav和小圆点
  for(var j=0;j<liNodes.length;j++){
    liNodes[j].classList.remove('active')
    pointLiNodes[j].classList.remove('active')
  }
  liNodes[index].classList.add('active')
  pointLiNodes[index].classList.add('active')
  //切换箭头
  arrow.style.left = (liNodes[index].offsetLeft + (liNodes[index].offsetWidth / 2) + (arrow.offsetWidth / 2)) + "px";

  //切换每一屏
  contentul.style.top = -index * contentNode.offsetHeight + 'px';

  preIndex = index
}
