class Dog

    attr_accessor :location, :distance, :walks_details, :total_times_walked

    def initialize(name, breed)

        @name = name
        @breed = breed

        @walks_details = Hash.new

        @total_times_walked = 0
            
        puts "A dog has been created!"

    end

    def speak

        puts "Woof! my name is #{@name} I am a #{@breed}."
    end

    def walk(location, distance)
        @total_times_walked = total_times_walked + 1

        # Every walk will be stored as a {:location, :distance} hash with :distance being an array

        # If the value doesn't exist for a key, create a new empty array before pushing the distance variable into it
        if !(@walks_details.key?(location))
            @walks_details[location] = Array.new
        end

        (@walks_details[location]).push(distance)

        self
    end

    def display_walks
        puts "I have been for #{total_times_walked} walks today."

        @total_distance = 0

        # Loop through each item in the hash to get all the arrays
        @walks_details.each do |key, value|
            # For each item in each array, add the items' values (distance) together
            @walks_details[key].each do |value|
                @total_distance = @total_distance + value
            end
        end

        puts @walks_details

        puts "Total distance travelled: #{@total_distance}"
        
    end

end

dog1 = Dog.new("Doggo", "Poodle")
dog1.speak
dog1.walk("Brisbane", 10).walk("Brisbane", 100).walk("Sydney", 1000)
dog1.display_walks

puts ""
dog2 = Dog.new("Pupper", "Groodle")
dog2.speak


