var intervalTimer = {
  timer1: 0,
  timer2: 0
}

//每次都改对象的属性

export default {
  intervalTimer,
  bubbleFn:function (canvas) {
    clearInterval(intervalTimer.timer1)
    clearInterval(intervalTimer.timer2)

    var ctx = canvas.getContext('2d')
    var arr = []

    //提供圆
    intervalTimer.timer1 = setInterval(() => {
      var radius = Math.round(Math.random() * 6) + 4;
      var x = Math.round(Math.random() * canvas.width)
      var y = canvas.height - radius

      var r = Math.round(Math.random() * 255)
      var g = Math.round(Math.random() * 255)
      var b = Math.round(Math.random() * 255)
      var a = 1

      var startX = x
      var startY = y
      var stepX = Math.round(Math.random() * 40) + 10
      var stepY = Math.round(Math.random() * 40) + 10

      var deg = 0;
      arr.push({
        x,
        y,
        radius,
        r,
        g,
        b,
        a,
        startX,
        startY,
        deg,
        stepX,
        stepY
      })
    }, 20)

    //画圆
    intervalTimer.timer2 = setInterval(() => {
      //console.log(arr);
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      arr.forEach((item, index) => {
        item.deg += 8
        item.x = item.startX - (Math.sin((item.deg * Math.PI) / 180) * item.stepX)
        item.y = item.startY - ((item.deg * Math.PI) / 180 * item.stepY)

        if (item.y < -item.radius) {
          arr.splice(index, 1)
        }

      })
      arr.forEach((item) => {
        ctx.save()
        ctx.beginPath()

        ctx.fillStyle = (`rgba(${item.r},${item.g},${item.b},${item.a})`)
        ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI)

        ctx.fill()
        ctx.restore()
      })

    }, 1000 / 60)

  }
}