import move from '../move/move'

export default function (ev,index) {
  ev = ev || event
  var dir = ''
  var pointLiNodes = document.querySelectorAll('#content .points li')
  var length = pointLiNodes.length
  var contentNode = document.querySelector('#content')

  if(ev.wheelDelta &&  ev.wheelDelta > 0){
    dir = "up"
  }else if(ev.wheelDelta &&  ev.wheelDelta < 0){
    dir = "down";
  }

  if(ev.detail &&  ev.detail > 0){
    dir = "down"
  }else if(ev.detail &&  ev.detail < 0){
    dir ="up"
  }

  switch (dir) {
    case 'up':
      index > 0 ? index-- : 0
      move(index)
      break
    case 'down':
      index < (length - 1) ? index++ : (length - 1)
      move(index)
      break
  }
  contentNode.index = index
}