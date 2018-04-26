class Book < ApplicationRecord
  belongs_to :author

  scope :title, -> (title_name) { where("LOWER(title) like ?", "%#{title_name.downcase}%") }

  scope :author_name, -> (author_name) { eager_load(:author).where("LOWER(name) LIKE ?", "%#{author_name.downcase}%") }
end
