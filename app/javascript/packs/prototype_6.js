const particlesQuantity = [26]


const circleTypes = [
    ['ch1',     256, 450,  0, 0],
    ['ch2',     256, 450,  0, 0],
    ['ch3',     256, 450,  0, 0],
    ['ch4',     256, 450,  0, 0],
    ['ch5',     256, 450,  0, 0],
    ['ch6',     256, 450,  0, 0],
    ['ch7',     256, 450,  0, 0],
    ['ch8',     256, 450,  0, 0],
    ['ch9',     256, 450,  0, 0],
    ['ch10',     256, 450,  0, 0],
    ['ch11',     256, 450,  0, 0],
    ['ch12',     256, 450,  0, 0],
    ['ch13',     256, 450,  0, 0],
    ['ch14',     256, 450,  0, 0],
    ['ch15',     256, 450,  0, 0],
    ['ch16',     256, 450,  0, 0],
    ['ch17',     256, 450,  0, 0],
    ['ch18',     256, 450,  0, 0],
    ['ch19',     256, 450,  0, 0],
    ['ch20',     256, 450,  0, 0],
    ['ch21',     256, 450,  0, 0],
    ['ch22',     256, 450,  0, 0],
    ['ch23',     256, 450,  0, 0],
    ['ch24',     256, 450,  0, 0],
    ['ch25',     256, 450,  0, 0],
    ['ch26',     256, 450,  0, 0],
    ['ch27',     256, 450,  0, 0],
    ['ch28',     256, 450,  0, 0],
    ['ch29',     256, 450,  0, 0],
    ['ch30',     256, 450,  0, 0],
    ['ch31',     256, 450,  0, 0],
    ['ch32',     256, 450,  0, 0],
    ['ch33',     256, 450,  0, 0],
    ['ch34',     256, 450,  0, 0],
    ['ch35',     256, 450,  0, 0],
    ['ch36',     256, 450,  0, 0],
    ['ch37',     256, 450,  0, 0],
]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  // console.log("Test");
  return array[Math.floor(Math.random() * array.length)]
}

function createCircle(frame) {
  const circleElement = document.createElement('div')
  const circleType = sample(circleTypes)
  circleElement.classList.add('circle')

  const top = getRandomArbitrary(0, 1000)
  const left = getRandomArbitrary(0, 1000)
  const size = getRandomArbitrary(circleType[1], circleType[2])

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = '100%'
  circleElement.style.height = "100%"
  const bgSize = getRandomArbitrary(10, 80)
  circleElement.style.backgroundSize = [bgSize, '%'].join('')

  circleElement.style.zIndex = Math.floor(
    getRandomArbitrary(circleType[3], circleType[0])
  )

  circleElement.classList.add(circleType[0])
  frame.appendChild(circleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')

  container.appendChild(frame)


  for (var i = 0; i < 37; i++) {
          createCircle(frame, i)
        }
})
