const circleTypes = [
    ['ch1',     210, 220,  0, 0],
    ['ch2',     210, 220,  0, 0],
    ['ch3',     210, 220,  0, 0],
    ['ch4',     210, 220,  0, 0],
    ['ch5',     210, 220,  0, 0],
    ['ch6',     210, 220,  0, 0],
    ['ch7',     210, 220,  0, 0],
    ['ch8',     210, 220,  0, 0],
    ['ch9',     210, 220,  0, 0],
    ['ch10',     210, 220,  0, 0],
    ['ch11',     210, 220,  0, 0],
    ['ch12',     210, 220,  0, 0],
    ['ch13',     210, 220,  0, 0],
    ['ch14',     210, 220,  0, 0],
    ['ch15',     210, 220,  0, 0],
    ['ch16',     210, 220,  0, 0],
    ['ch17',     210, 220,  0, 0],
    ['ch18',     210, 220,  0, 0],
    ['ch19',     210, 220,  0, 0],
    ['ch20',     210, 220,  0, 0],
    ['ch21',     210, 220,  0, 0],
    ['ch22',     210, 220,  0, 0],
    ['ch23',     210, 220,  0, 0],
    ['ch24',     210, 220,  0, 0],
    ['ch25',     210, 220,  0, 0],
    ['ch26',     210, 220,  0, 0],
    ['ch27',     210, 220,  0, 0],
    ['ch28',     210, 220,  0, 0],
    ['ch29',     210, 220,  0, 0],
    ['ch30',     210, 220,  0, 0],
    ['ch31',     210, 220,  0, 0],
    ['ch32',     210, 220,  0, 0],
    ['ch33',     210, 220,  0, 0],
    ['ch34',     210, 220,  0, 0],
    ['ch35',     210, 220,  0, 0],
    ['ch36',     210, 220,  0, 0],
    ['ch37',     210, 220,  0, 0],
  ]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  function sample(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  function createCircle(frame) {
    const circleElement = document.createElement('div')
    const circleType = sample(circleTypes)
    circleElement.classList.add('circle')

    const top = getRandomArbitrary(0, 694)
    const left = getRandomArbitrary(0, 694)
    const size = getRandomArbitrary(90, 110)

    circleElement.style.top = [top, 'px'].join('')
    circleElement.style.left = [left, 'px'].join('')
    circleElement.style.width = [size, 'px'].join('')
    circleElement.style.height = [size, 'px'].join('')
    circleElement.classList.add(getRandomArbitrary(circleType[1], circleType[36]))

    frame.appendChild(circleElement)
  }

document.addEventListener('DOMContentLoaded', () => {
  console.log("Test");
  const container = document.getElementsByClassName('prototype_5')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  for (var i = 0; i < 43; i++) {
    createCircle(frame)
  }
})
