class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages
  mount_uploader :avatar, ImageUploader

  def self.search(keyword)
   if keyword
     User.where(['name LIKE ?', "%{keyword}%"])
   end
  end

  def greet
     'hello'
  end
end
