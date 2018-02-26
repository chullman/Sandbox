class Dog

    attr_accessor :name, :breed

    def initialize()
        puts "A dog has been created!"

        @name = "undefined"
    end

    def speak()

        puts "Woof! my name is #{name} I am a #{breed}"
    end

    def give_treat(treat)
        puts "Dog eats the #{treat}"
    end
end

dog1 = Dog.new
dog1.breed = "Poodle"
dog1.speak
dog1.name = "Doggo"
puts "Name set to #{dog1.name}"
dog1.speak


