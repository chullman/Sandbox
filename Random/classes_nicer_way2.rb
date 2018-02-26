class Dog

    attr_accessor :name, :breed

    def initialize(name, breed)

        @name = name
        @breed = breed
        
        puts "A dog has been created!"

    end

    def speak()

        # @ symbol necessary for setters, but not getters
        puts "Woof! my name is #{name} I am a #{breed}"
    end

    def give_treat(treat)
        puts "Dog eats the #{treat}"
    end
end

dog1 = Dog.new("Doggo", "Poodle")
dog1.speak

