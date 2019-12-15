import bubbleObj from "./bubble/bubble";

export default function () {
  var liNodes = document.querySelectorAll('#content .list .team .team-3 .team-list li')
  var canvas = document.querySelector('#content .list .team .team-3 .myCanvas')

  canvas.width = liNodes[0].offsetWidth
  canvas.height = liNodes[0].offsetHeight

  //鼠标移入li，自己高亮
  liNodes.forEach((item) => {
    item.onmouseenter = function () {
      liNodes.forEach((item) => {
        item.style.opacity = 0.2
      })
      this.style.opacity = 1

      canvas.style.display = 'block'
      //让canvas跟随每个li进行移动
      canvas.style.left = this.offsetLeft + 'px'
      canvas.style.top = this.offsetTop + 'px'

      bubbleObj.bubbleFn(canvas)
    }
  })

  canvas.onmouseleave = ()=>{
    liNodes.forEach((item)=>{
      item.style.opacity = 1
    })
    canvas.style.display = 'none'
    //鼠标移出气泡没有了，但是canvas一直在执行。清除定时器,把bubble中的定时器暴露出来
    clearInterval(bubbleObj.intervalTimer.timer1)
    clearInterval(bubbleObj.intervalTimer.timer2)
  }
}