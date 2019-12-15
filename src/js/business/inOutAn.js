var homeList = document.querySelector('#content .list .home .home-list')
var homePoints = document.querySelector('#content .list .home .home-points')
homeList.style.transition = 'transform 1s,opacity 1s'
homePoints.style.transition = 'transform 1s,opacity 1s'

var plane1 = document.querySelector('#content .list .course .plane1')
var plane2 = document.querySelector('#content .list .course .plane2')
var plane3 = document.querySelector('#content .list .course .plane3')

var pencel1 = document.querySelector('#content .list .works .pencel1')
var pencel2 = document.querySelector('#content .list .works .pencel2')
var pencel3 = document.querySelector('#content .list .works .pencel3')

var about3 = document.querySelector('#content .list .about .about-3')
var about4 = document.querySelector('#content .list .about .about-4')

var team1 = document.querySelector('#content .list .team .team-1')
var team2 = document.querySelector('#content .list .team .team-2')

export default [
  {
    //第一屏出入场。出场时ul在上面，ol在下面。入场时ul从上面下来，ol从下面上去，加过渡。
    inAn() {
      homeList.style.opacity = 1
      homePoints.style.opacity = 1
      homeList.style.transform = 'translateY(0)'
      homePoints.style.transform = 'translateY(0)'
    },
    outAn() {
      homeList.style.opacity = 0
      homePoints.style.opacity = 0
      homeList.style.transform = 'translateY(-250px)'
      homePoints.style.transform = 'translateY(250px)'
    }
  },
  {
    //第二屏出入场。飞机往前移动。
    inAn() {
      plane1.style.transform = 'translateX(50px) translateY(50px)'
      plane2.style.transform = 'translateX(50px) translateY(-50px)'
      plane3.style.transform = 'translateX(-50px) translateY(50px)'
    },
    outAn() {
      plane1.style.transform = 'translateX(0) translateY(0)'
      plane2.style.transform = 'translateX(0) translateY(0)'
      plane3.style.transform = 'translateX(0) translateY(0)'
    }
  },
  {
    //第三屏
    inAn() {
      pencel1.style.transform = 'translateX(-50px) translateY(-50px)'
      pencel2.style.transform = 'translateX(-50px) translateY(50px)'
      pencel3.style.transform = 'translateX(-50px) translateY(50px)'
    },
    outAn() {
      pencel1.style.transform = 'translateX(0) translateY(0)'
      pencel2.style.transform = 'translateX(0) translateY(0)'
      pencel3.style.transform = 'translateX(0) translateY(0)'
    }
  },
  {
    inAn() {
      about3.style.transform = 'rotate(0deg)'
      about4.style.transform = 'rotate(0deg)'
    },
    outAn() {
      about3.style.transform = 'rotate(45deg)'
      about4.style.transform = 'rotate(-45deg)'
    }
  },
  {
    inAn() {
      team1.style.transform = 'translateX(0)'
      team2.style.transform = 'translateX(0)'
    },
    outAn() {
      team1.style.transform = 'translateX(-200px)'
      team2.style.transform = 'translateX(200px)'
    }
  }
]

