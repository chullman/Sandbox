class Note < ApplicationRecord

  belongs_to :schmo, :foreign_key => 'userid'

end
