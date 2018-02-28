class Pet
  def eat
    puts "nom nom nom"
  end
end

class Dog < Pet
  def walk
    puts "I love walks"
  end
end

class Cat < Pet
  def nap
    puts "I love naps"
  end
end

edison = Dog.new
edison.eat
edison.walk

bean = Cat.new
bean.eat
bean.nap