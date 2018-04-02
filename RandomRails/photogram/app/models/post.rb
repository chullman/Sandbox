class Post < ApplicationRecord

  mount_uploader :image, PostImageUploader

  belongs_to :user

  validates :user_id, presence: true

end
