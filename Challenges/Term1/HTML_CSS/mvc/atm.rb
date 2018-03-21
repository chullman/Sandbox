# dispense money - controller
# respond to user choice - controller
# display balance - view
# retrieve balance - model
# prompt for user input - view
# respond to invalid pin - controller

class User_account

  attr_accessor :balance
  attr_reader :pin_number

  def initialize(balance = 0)
    @balance = balance
  end

  def set_pin_number(pin_number)
    @pin_number = pin_number
  end

end

class ATM_model

  attr_reader :registered_users

  def initialize
    @cash_in_atm = 0

    @registered_users = Array.new;
  end

  def get_cash_in_atm
    @cash_in_atm
  end

  def refill_atm(amount)
    @cash_in_atm += amount
  end

  def register_user(user)
    @registered_users.push(user)
  end

end

class ATM_controller
  def initialize
    @atm_model = ATM_model.new
    @atm_view = ATM_view.new
  end
  
  def refill_machine(amount)
    @atm_model.refill_atm(amount)
  end

  def register_user(user)
    @atm_model.register_user(user)
  end

  def get_registered_user(user)
    user_found_in_db = false
    @registered_user = nil
    @atm_model.registered_users.each do |a_user|
      if a_user == user
        @registered_user = a_user
        user_found_in_db = true
      end
    end
    if user_found_in_db == false
      @atm_view.not_registered_user_display
      @atm_view.quit_display
      return
    end
    @registered_user
  end

  def use_atm(user)

    if @registered_user != nil
      @atm_view.pin_prompt_display
      pin_input = @atm_view.get_input
      
      while (pin_input.to_i != user.pin_number && pin_input.to_s.downcase != 'x')
        @atm_view.invalid_pin_display
        pin_input = @atm_view.get_input
      end

      if (pin_input.to_s.downcase == 'x')
        @atm_view.quit_display
        return
      end

      menu_choice = @atm_view.choice_menu

      until menu_choice == 4

        case menu_choice
        when 1

          # withdraw
          @atm_view.withdraw_prompt
          withdraw_amount = @atm_view.get_input.to_i
          if @registered_user.balance < withdraw_amount
            @atm_view.insufficient_funds
          else
            @registered_user.balance -= withdraw_amount
          end

        when 2

          # deposit
          @atm_view.deposit_prompt
          deposit_amount = @atm_view.get_input.to_i
          @registered_user.balance += deposit_amount

        when 3

          # display balance
          @atm_view.display_balance(@registered_user.balance)

        end
        menu_choice = @atm_view.choice_menu
      end

      @atm_view.quit_display
    end

  end

end

class ATM_view

  def quit_display
    puts "Goodbye!"
  end

  def display_balance(balance)
    puts ""
    puts "Your balance is: $#{balance}"
    puts ""
  end

  def insufficient_funds
    puts "Sorry, insufficient funds."
  end

  def not_registered_user_display
    puts "Sorry, that user isn't registered with this ATM"
  end

  def invalid_pin_display
    puts "Invalid PIN, try again, or enter X to quit:"
  end

  def withdraw_prompt
    puts "How much would you like to withdraw?"
  end

  def deposit_prompt
    puts "How much would you like to deposit?"
  end

  def get_input
    gets.chomp
  end

  def pin_prompt_display
    puts "Please enter your pin:"
  end


  def choice_menu
    choice = 0
    while choice < 1 || choice > 4
      puts "---------"
      puts "MAIN MENU"
      puts "---------"
      puts "1. Withdraw"
      puts "2. Deposit"
      puts "3. Display balance"
      puts "4. Quit"
      puts "---------"
      choice = gets.chomp.to_i
    end
    choice
  end

end


atm_controller = ATM_controller.new

user1 = User_account.new(100)
user1.set_pin_number(1234)
atm_controller.register_user(user1)

user2 = User_account.new(0)
user2.set_pin_number(5555)
atm_controller.register_user(user2)

user3 = User_account.new(50)
user3.set_pin_number(9999)
atm_controller.register_user(user3)


atm_controller.use_atm(atm_controller.get_registered_user(user1))
