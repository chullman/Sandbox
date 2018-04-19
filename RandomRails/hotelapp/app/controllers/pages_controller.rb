class PagesController < ApplicationController
  def hotels
    @hotels = Hotel.all
  end
end
