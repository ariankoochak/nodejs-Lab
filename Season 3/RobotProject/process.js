const process = (req) => {
  const command = req.pathname.split('/')[1]
  const url = req.pathname.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
  switch (command) {
    case 'MOVE':
      return move(nowPos)
    case 'LEFT':
      return left(nowPos)
    case 'RIGHT':
      return right(nowPos)
    case 'PLACE':
    case 'REPORT':
      return nowPos.join(',')
    default:
      return `'${command}' is not recognized as an internal or external command`
  }
}

const move = (nowPos) => {
  switch (nowPos[2]) {
    case 'NORTH':
      if (nowPos[1] < 4) { nowPos[1]++ }
      break
    case 'SOUTH':
      if (nowPos[1] > 0) { nowPos[1]-- }
      break
    case 'WEST':
      if (nowPos[0] > 0) { nowPos[0]-- }
      break
    case 'EAST':
      if (nowPos[0] < 4) { nowPos[0]++ }
      break
  }
  return nowPos.join(',')
}

const left = (nowPos) => {
  switch (nowPos[2]) {
    case 'NORTH':
      nowPos[2] = 'WEST'
      break
    case 'SOUTH':
      nowPos[2] = 'EAST'
      break
    case 'WEST':
      nowPos[2] = 'SOUTH'
      break
    case 'EAST':
      nowPos[2] = 'NORTH'
      break
  }
  return nowPos.join(',')
}

const right = (nowPos) => {
  switch (nowPos[2]) {
    case 'NORTH':
      nowPos[2] = 'EAST'
      break
    case 'SOUTH':
      nowPos[2] = 'WEST'
      break
    case 'WEST':
      nowPos[2] = 'NORTH'
      break
    case 'EAST':
      nowPos[2] = 'SOUTH'
      break
  }
  return nowPos.join(',')
}

const posReader = (pos) => {
  pos = pos.split(',')
  return pos
}

module.exports = process
