(function ($) {
  const ROOT = {
    doms: function (cnfg) {
      this.config = cnfg
      this.enterEvent()
    },
    enterEvent: function () {
      const that = this
      this.config.enter.on('click', function () {
        that.sendCommand()
      })
    },
    sendCommand: function () {
      const command = this.config.input.val()
      $.get(
          `http://127.0.0.1:3000/${command}/${this.config.pos[0]},${this.config.pos[1]},${this.config.pos[2]}`,
          (res) => {
            this.changeRobotpos(res)
          }
      )
    },
    changeRobotpos: function (res) {
      res = res.split(',')
      $(`[x = ${this.config.pos[0]}][y = ${this.config.pos[1]}]`).html('')
      this.config.pos[0] = +res[0]
      this.config.pos[1] = +res[1]
      this.config.pos[2] = res[2]
      this.fixXY(this.config.pos[0], this.config.pos[1])
      this.fixAngle(this.config.pos[2])
    },
    fixXY: function (x, y) {
      const nextPos = $(`[x = ${x}][y = ${y}]`)
      nextPos.html('<img src="./pic.png" width="100px">')
    },
    fixAngle: function (compass) {
      console.log(compass)
      const bot = $('img')
      switch (compass) {
        case 'NORTH':
          bot.css('transform', 'rotate(0deg)')
          break
        case 'EAST':
          bot.css('transform', 'rotate(90deg)')
          break
        case 'WEST':
          bot.css('transform', ' rotate(270deg)')
          break
        case 'SOUTH':
          bot.css('transform', ' rotate(180deg)')
          break
      }
    }
  }
  ROOT.doms({
    input: $('input'),
    enter: $('button'),
    cells: $('div'),
    pos: [0, 0, 'NORTH']
  })
})(jQuery)
