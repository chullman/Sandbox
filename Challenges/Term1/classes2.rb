class Dog

    attr_reader :location, :times_walked

    def initialize(name, breed, location)

        @name = name
        @breed = breed
        @location = location

        @times_walked = 0
        
        puts "A dog has been created!"

    end

    def speak

        puts "Woof! my name is #{@name} I am a #{@breed}."
    end

    def walk
        @times_walked = times_walked + 1
        self
    end

    def display_walks
        puts "I have been for #{times_walked} walks today."
    end

end

dog1 = Dog.new("Doggo", "Poodle", "Brisbane")
dog1.speak
puts dog1.location
dog1.walk.walk.display_walks

puts ""
dog2 = Dog.new("Pupper", "Groodle", "Brisbane")
dog2.speak


