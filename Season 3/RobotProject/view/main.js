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
            console.log('res')
          }
      )
    },
    changeRobotpos: function (res) {
      console.log(res)
    }
  }
  ROOT.doms({
    input: $('input'),
    enter: $('button'),
    cells: $('div'),
    pos: [0, 0, 'NORTH']
  })
})(jQuery)
