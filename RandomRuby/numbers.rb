puts "Welcome to Chrisalculator"

puts "Give me the first number"
first_number = gets.chomp.to_i

puts "Give me the second number"
second_number = gets.chomp.to_i

if first_number % second_number != 0
  puts "#{first_number} divided by #{second_number} is #{first_number / second_number} with a remainder of #{first_number % second_number}" 
else
  puts "#{first_number} divided by #{second_number} is #{first_number / second_number}"
end

# if first_number % second_number != 0
#   print "with a remainder of #{first_number % second_number}"
# end

# if user_input == "Kanye"
#   puts "...kanye info"
#   break
# elsif user_input == "Dogs"
#   puts "...dog info"
#   break
# else
#   puts "Nothing found :("
# end
