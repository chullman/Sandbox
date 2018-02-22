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

puts add(1,2,3)