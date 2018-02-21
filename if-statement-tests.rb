name = "Tom"
age = 21

if name == "Chris"
    puts "Hello #{name}"
elsif name == "Tom"
    puts "Hello Tom"

    if age >= 21
        puts "You can enter the casino!"
    end
else
    puts "Wait, you're not #{name}"
end