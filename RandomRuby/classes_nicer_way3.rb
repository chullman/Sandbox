class Human

    #attr_accessor :total_meals

    def initialize
        @total_meals = 0
    end

    def eat
        @total_meals = @total_meals + 1
        self # self returns the object (like "this"?)
    end

    def display_total_meals
        puts "Total meals eaten: #{@total_meals}"
    end
end


scott = Human.new
scott.eat.eat.eat.eat # we can chain these methods because we're calling self back on every eat call
scott.display_total_meals #-> 4