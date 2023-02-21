const process = (req) => {
  const command = req.pathname.split('/')[1]
  switch (command) {
    case 'MOVE':
      return move(req.pathname)
    case 'LEFT':
      return left(req.pathname)
    case 'RIGHT':
      return right(req.pathname)
    case 'REPORT':
      return report(req.pathname)
    case 'PLACE':
      return place(req.pathname)
  }
}

const move = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
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

const left = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
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

const right = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
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

const report = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
  return nowPos.join(',')
}

const place = (url) => {
  url = url.split('/')
  const nowPos = posReader(url[2])
  nowPos[1] = +nowPos[1]
  nowPos[0] = +nowPos[0]
  return nowPos.join(',')
}

const posReader = (pos) => {
  pos = pos.split(',')
  return pos
}

module.exports = process
