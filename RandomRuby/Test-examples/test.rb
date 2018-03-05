require 'test/unit'
require_relative 'app'

class OurTest < Test::Unit::TestCase
  def test_add_gst
    assert_equal(110, add_gst(100))
  end
  def test_add_vat
    assert_equal(115, add_vat(100))
  end
end

# "red-green refactoring" write the test first to make it error with red, then write the actual code to make the tests green

# be really heavy on unit tests, before end-to-end test