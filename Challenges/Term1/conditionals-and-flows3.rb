welcome = "Welcome to the banking app"

puts welcome

 puts "Enter in your password:"

password_input = gets.chomp

while password_input != "yay"
    puts "Invalid password. Try again."
    password_input = gets.chomp
    if password_input.downcase == "exit"
        abort
    end
end


options_message = "What would you like to do? (options: balance, deposit, withdraw, exit)"

puts options_message

balance = 0
deposit = 0
withdraw = 0


loop do
    input = gets.chomp.downcase

    system('cls')

    while input != "balance" && input != "deposit" && input != "exit" && input != "withdraw"
        puts "Invalid selection. Try again."
        input = gets.chomp
    end

    if input == "balance"
        puts "Your balance is $#{balance}"

    elsif input == "deposit"
        puts "How much would you like to deposit?"
        deposit = gets.chomp.to_i
        balance += deposit 
        puts "You have deposited $#{deposit}"

    elsif input == "withdraw"
        puts "How much would you like to withdraw?"
        withdraw = gets.chomp.to_i

        if withdraw > balance
            puts "You can't withdraw that much!"
        else
            puts "You withdrew $#{withdraw} from $#{balance}"
            balance -= withdraw
        end

    end

    puts options_message


break if input == "exit"
end

