require 'gosu'

$tune = nil

class Game_window < Gosu::Window

  attr_accessor :tune

  def initialize
    super 640, 480
    self.caption = 'Hello World!'
    @tune = Gosu::Sample.new("C:\\CA\\GIT_Sandbox\\sandbox\\AssignmentTests\\magic-chime-01.wav")
  end

end


window = Game_window.new

window.show
window.draw


