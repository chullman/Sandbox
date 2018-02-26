class Dog

    attr_accessor :name, :breed, :legs

    def initialize(name, breed, legs = 4)

        @name = name
        @breed = breed
        @legs = legs
        
        puts "A dog has been created!"

    end

    def speak()

        # @ symbol necessary for setters, but not getters
        puts "Woof! my name is #{name} I am a #{breed}. I have #{legs} legs"
    end

    def give_treat(treat)
        puts "Dog eats the #{treat}"
    end
end

dog1 = Dog.new("Doggo", "Poodle")
dog1.speak

dog2 = Dog.new("Pupper", "Groodle", 5)
dog2.speak
