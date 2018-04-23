class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts

  # give default roles
  after_create :set_role

  def set_role
    add_role :author
  end

  def can_create?
    self.has_role?(:admin) || self.has_role?(:author)
  end


end
