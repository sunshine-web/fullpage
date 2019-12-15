export default function (pointsNodes, currentIndex) {
  pointsNodes.forEach((item) => {
    item.classList.remove('active')
  })
  pointsNodes[currentIndex].classList.add('active')
}