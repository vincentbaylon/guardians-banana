class User < ApplicationRecord
  has_secure_password

  has_many :high_scores

  validates :username, :password_digest, presence: true
end
