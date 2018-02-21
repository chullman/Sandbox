age = gets.chomp.to_i

if age >= 18
    puts "Welcome to the casino!"
elsif age == 16
    puts "Sweet sixteen!"
else
    puts "Sorry, you're too young."
end