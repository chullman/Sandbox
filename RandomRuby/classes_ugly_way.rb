class Dog

    def initialize()
        puts "A dog has been created!"

        @name = "undefined"
    end

    # Set
    def name=(value)

        @name = value
        
        puts "Setting name #{@name}"
    end

    # Get
    def name
        @name
    end

    def speak()
        puts "Woof! my name is #{@name}"
    end

    def give_treat(treat)
        puts "Dog eats the #{treat}"
    end
end

dog1 = Dog.new
dog1.speak
dog1.name = "Doggo"
dog1.speak


