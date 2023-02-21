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
      $.ajax({
        url: `http://127.0.0.1:3000/${command}/${this.config.pos[0]},${this.config.pos[1]},${this.config.pos[2]}`,
        type: 'GET',
        success: (res) => {
          if (command === 'REPORT') { alert(res) } else { this.changeRobotpos(res) }
        },
        error: (err) => {
          alert(err.responseText)
        }
      })
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
      $(`[x = ${x}][y = ${y}]`).html('<img src="./pic.png" width="100px">')
    },
    fixAngle: function (compass) {
      let deg = 0
      switch (compass) {
        case 'NORTH':
          deg = 0
          break
        case 'EAST':
          deg = 90
          break
        case 'SOUTH':
          deg = 180
          break
        case 'WEST':
          deg = 270
          break
      }
      $('img').css('transform', `rotate(${deg}deg)`)
    }
  }
  ROOT.doms({
    input: $('input'),
    enter: $('button'),
    cells: $('div'),
    pos: [0, 0, 'NORTH']
  })
})(jQuery)
