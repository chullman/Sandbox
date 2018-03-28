class Post < ApplicationRecord

  has_attached_file :image

  validates_attachment :image, presence: true,
  content_type: { content_type: ['image/jpeg', 'image/png'] }
  # size: { in: 0..10000.kilobytes }

end
