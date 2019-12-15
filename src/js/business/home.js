import pointMove from './points/points'

const RIGHTSHOW = "rightShow"
const LEFTHDE = "leftHide"
const RIGHTHIDE = "rightHide"
const LEFTSHOW = "leftShow"

//点击小原点之前先移出所有的class
function clearClass(node) {
  node.classList.remove(RIGHTSHOW)
  node.classList.remove(LEFTHDE)
  node.classList.remove(RIGHTHIDE)
  node.classList.remove(LEFTSHOW)
}

var pointsList = document.querySelectorAll('#content .list .home .home-points li')
var homeList = document.querySelectorAll('#content .list .home .home-list li')
var pictureDiv = document.querySelector('#content .list .home > div')
var oldIndex = 0;
var autoIndex = 0;
//var oldAutoIndex = 0;
var timer = ''

//自动和手动的同步。手动点击时关闭定时器。正在自动轮播，突然手动轮播，自动轮播的那屏是手动轮播的上一屏，自动的oldAutoIndex要和手动的oldIndex一样。手动点击了index要给自动的，让自动的从当前开始往下轮播。

//当鼠标移入轮播图外层的div，轮播停止。移出，开始轮播。
pictureDiv.onmouseenter = function () {
  clearInterval(timer)
}
pictureDiv.onmouseleave = function () {
  autoMove()
}

//自动轮播。用定时器，注意时间的设置。一直往后轮播，操作相邻的两个，定义轮播的index以及oldIndex， oldAutoIndex = autoIndex。轮播到最后一个变成第一个。
function autoMove() {
  clearInterval(timer)

  timer = setInterval(() => {
    autoIndex++
    if (autoIndex > homeList.length - 1) {
      autoIndex = 0
    }
    clearClass(homeList[autoIndex])
    clearClass(homeList[oldIndex])
    homeList[autoIndex].classList.add(RIGHTSHOW)
    homeList[oldIndex].classList.add(LEFTHDE)

    //自动轮播时同步小圆点
    pointMove(pointsList, autoIndex)

    oldIndex = autoIndex
  }, 2000)//时间要大于动画的时间
}

//手动轮播，点击小圆点进行轮播。对小原点进行遍历，判断所点击的index是否大于，小于，等于当前的index。如果隔着点击，oldIndex = this.index;把当前的index的值给上个index。记得在判断前清除class。同步小圆点。
export default function () {
  autoMove()
  pointsList.forEach(function (item, index) {
    item.index = index;
    item.onclick = function () {
      clearInterval(timer)
      if (this.index === oldIndex) {
        return
      }
      clearClass(homeList[this.index])
      clearClass(homeList[oldIndex])
      if (this.index > oldIndex) {
        homeList[this.index].classList.add(RIGHTSHOW)
        homeList[oldIndex].classList.add(LEFTHDE)
      }
      if (this.index < oldIndex) {
        homeList[this.index].classList.add(LEFTSHOW)
        homeList[oldIndex].classList.add(RIGHTHIDE)
      }

      //同步小圆点
      pointMove(pointsList, this.index)

      oldIndex = this.index;
      autoIndex = this.index;
    }
  })
}