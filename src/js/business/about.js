function createLi(ul) {
  for (var i = 0; i < 4; i++) {
    var w = ul.offsetWidth / 2
    var h = ul.offsetHeight / 2
    var liNOde = document.createElement('li')
    var imgNode = document.createElement('img')
    imgNode.src = ul.dataset.src
    imgNode.style.left = `${-i % 2 * w}px`
    imgNode.style.top = `${-Math.floor(i / 2) * h}px`
    liNOde.style.width = `${w}px`
    liNOde.style.height = `${h}px`
    ul.appendChild(liNOde)
    liNOde.appendChild(imgNode)
  }
}

export default function () {
  var boxUl = document.querySelectorAll('#content .list .about .box > ul')
  var box = document.querySelectorAll('#content .list .about .box')

  boxUl.forEach((ulNode) => {
    createLi(ulNode)
  })

  var w = boxUl[0].offsetWidth / 2
  var h = boxUl[0].offsetHeight / 2

  box.forEach(function (item) {
    item.onmouseenter = function () {
      /*var imgNodes = document.querySelectorAll('#content .list .about .box > ul > li > img')*/
      //用this代表鼠标移入了哪个box
      var imgNodes = this.querySelectorAll("ul > li > img")
      imgNodes.forEach((imgNode, index) => {
        switch (index) {
          case 0:
            imgNode.style.top = `${h}px`
            break;
          case 1:
            imgNode.style.left = `${-2*w}px`
            break;
          case 2:
            imgNode.style.left = `${w}px`
            break;
          case 3:
            imgNode.style.top = `${-2*h}px`
            break;
        }
      })
    }
    item.onmouseleave = function () {
      var imgNodes = this.querySelectorAll("ul > li > img")
      imgNodes.forEach((imgNode, index) => {
        switch (index) {
          case 0:
            imgNode.style.top = `${0}px`
            break;
          case 1:
            imgNode.style.left = `${-w}px`
            break;
          case 2:
            imgNode.style.left = `${0}px`
            break;
          case 3:
            imgNode.style.top = `${-h}px`
            break;
        }
      })
    }
  })
}

//ul和span定位在一起的。ul中创建li，li中创建img。每个li的宽度高度是ul的一半，li浮动到一起，四个li在ul框中，显示的都是图片左上角。

/*         w h   移动img让图片显示指定的位置
* 第0个img：0 0
* 第1个img：-w 0
* 第2个img：0 -h
* 第3个img：-w -h
*/

/*         w h   鼠标移入box时，移动img让图片离开
* 第0个img：0 h
* 第1个img：-2w 0
* 第2个img：w -h
* 第3个img：-w -2h
*/