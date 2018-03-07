class CoerceTest

  def initialize(num)
    @num = num
  end

  def *(a_fix_num)
    CoerceTest.new(@num * a_fix_num)
  end

  def coerce(other)
    return self, other
  end

end

coercetest1 = CoerceTest.new(2)
coercetest1

p coercetest1 * 3

# Note that 3 * coercetest1 will fail unless we implement the .coerce method

p 3 * coercetest1