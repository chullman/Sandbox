class Cat

    def initialize(name)
        @name = name
    end

    def speak
        puts "#{@name} says Meow!"
    end

end

cat1 = Cat.new("Kitty")
cat1.speak