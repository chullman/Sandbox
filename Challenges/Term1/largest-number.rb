# Largest Number

# Write a method that will take two numbers,
# and return whichever is the largest.

# Difficulty:
# 2/10

# Example:
# largest_number(100,50) should return 100
# largest_number(10,20) should return 20


def largest_number (number_1, number_2)
  if (number_1 == number_2)
    return number_1 # could also return number_2 here, doesn't matter which
  elsif (number_1 < number_2)
    return number_2
  elsif (number_1 > number_2)
    return number_1
  end
end

puts "The largest number is: #{largest_number(10,10)}"