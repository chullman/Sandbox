def say(message)
    puts message
end

say("Hello")
say("Welcome to my application")

def add(*numbers_to_add)
    total = 0
    numbers_to_add.each do |number|
        total += number
    end
    return total
end

def add_alternative(*numbers_to_add)
    numbers_to_add.inject do |sum, number|
        sum + number
    end
end

puts add(1,2,3)

puts add_alternative(1,2)