import inOutAn from './inOutAn'
import homeFn from './home'
export default function () {
  var bigCover = document.querySelector('#bigCover')
  var up = document.querySelector('#bigCover .up')
  var down = document.querySelector('#bigCover .down')
  var line = document.querySelector('#bigCover .line')

  setTimeout(function () {
    line.style.width = '100%'
  },1000)

  line.addEventListener('transitionend',()=>{
    up.style.height = '0'
    down.style.height = '0'
    line.remove()//自己删除自己
  })

  up.addEventListener('transitionend',()=>{
    bigCover.remove()
    inOutAn[0].inAn()
    homeFn()
  })
}