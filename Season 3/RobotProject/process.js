const process = (req) => {
  const command = req.pathname.split('/')[1]
  switch (command) {
    case 'MOVE':
      return move(req.pathname)
    case 'LEFT':
      console.log('left')
      break
    case 'RIGHT':
      console.log('right')
      break
    case 'REPORT':
      console.log('report')
      break
    case 'PLACE':
      console.log('place')
      break
  }
}

const move = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
  switch (nowPos[2]) {
    case 'NORTH':
      nowPos[1]++
      break
    case 'SOUTH':
      nowPos[1]--
      break
    case 'WEST':
      nowPos[0]--
      break
    case 'EAST':
      nowPos[0]++
      break
  }
  return nowPos.join(',')
}

const posReader = (pos) => {
  pos = pos.split(',')
  return pos
}

module.exports = process
