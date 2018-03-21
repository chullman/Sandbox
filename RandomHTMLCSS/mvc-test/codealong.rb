class StatsModel

  def initialize
    @numbers = []
  end

  def store(numbers_array)
    numbers_array.each { |x| @numbers.push x}
    puts @numbers.inspect
  end

  def get
    @numbers.sort
  end

  def average
    (@numbers.sum) / @numbers.length
  end

end

class StatsView
  def greeting
    puts "Welcome to my stats app!"
  end

  def menu
    choice = 0
    while choice < 1 || choice > 4
      puts "---------"
      puts "MAIN MENU"
      puts "---------"
      puts "1. Inset numbers"
      puts "2. List numbers"
      puts "3. Show average"
      puts "4. Quit"
      puts "---------"
      choice = gets.chomp.to_i
    end
    choice
  end

  def read_numbers
    values = []
    puts "Please enter positive numbers, one per line. Enter -1 when done."
    num = gets.chomp.to_i
    while num != -1 do
      values << num
      num = gets.chomp.to_i
    end
    values
  end

  def display(value)
    puts "The numbers are: #{value.inspect}"
  end

  def average_display(value)
    puts "The average is: #{value.inspect}"
  end

  def quit
    puts "Thanks! Come again!"
  end

end

class StatsController

  def initialize
    @StatsModel = StatsModel.new
    @StatsView = StatsView.new
  end

  def run
    @StatsView.greeting
    choice = @StatsView.menu

    until choice == 4
      case choice
      when 1
        # Insert numbers
        numbers = @StatsView.read_numbers
        @StatsModel.store numbers
      when 2
        # List numbers
        numbers = @StatsModel.get
        @StatsView.display(numbers)
      when 3
        avg = @StatsModel.average
        @StatsView.average_display(avg)
      end
      choice = @StatsView.menu
    end

    @StatsView.quit

  end
end

sc = StatsController.new
sc.run