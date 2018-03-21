class Gumball
end

class GumballMachineModel

  def initialize(gumballCount: 0)
    @gumballCount = gumballCount
  end
  
  def dispense
    if @gumballCount > 0
      @gumballCount -= 1
      return Gumball.new
    else
      return nil
    end
  end

  def refill(count)
    @gumballCount += count
  end

  def getGumballCount
    @gumballCount
  end

end

class GumballMachineView

  def greeting
    puts "Welcome to the gumball machine!"
  end

  def menu
    choice = nil
    while choice != "G" && choice != "R" && choice != "X"
      puts "Press G to get a gumball, R to refill, or X to exit"
      choice = gets.chomp.upcase
    end
    
    choice
  end

  def getGumball
    puts "Yum, here's your gumball"
  end

  def machineEmpty
    puts "Sorry! No more gumballs left!"
  end

  def refill(count)
    puts "There are now #{count} gumballs in the machine."
  end

  def exit
    puts "Thank you for using the gumball machine!"
  end

end

class GumballMachineController

  def initialize
    @gumballMachineModel = GumballMachineModel.new
    @gumballMachineView = GumballMachineView.new
  end

  def run
    @gumballMachineView.greeting
    choice = @gumballMachineView.menu 
    
    while choice != "X"
      if choice == "G"
        gumball = @gumballMachineModel.dispense
        if gumball.nil?
          @gumballMachineView.machineEmpty
        else
          @gumballMachineView.getGumball
        end
      end
      if choice == "R"
        numGumballs = @gumballMachineModel.refill(6)
        @gumballMachineView.refill(numGumballs)
      end
      choice = @gumballMachineView.menu
    end
    @gumballMachineView.exit
  end

  def getGumballCount
    @gumballMachineModel.getGumballCount
  end
end

gumballMachineController = GumballMachineController.new
gumballMachineController.run