class User < ApplicationRecord
  has_secure_password

  has_many :high_scores
  has_many :user_characters, dependent: :destroy
  has_many :characters, through: :user_characters

  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { in: 5..15 }
end
