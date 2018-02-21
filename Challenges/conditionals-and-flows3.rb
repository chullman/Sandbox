puts "Welcome to the banking app
What would you like to do? (options: balance, deposit, exit)"

balance = 0
deposit = 0
withdraw = 0

loop do
    input = gets.chomp.downcase

    system('cls')

    while input != "balance" && input != "deposit" && input != "exit" && input != "withdraw"
        puts "Invalid selection"
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
            puts "You withdrew #{withdraw} from #{balance}"
            balance -= withdraw

        end
    end


break if input == "exit"
end