class HighScore < ApplicationRecord
  belongs_to :user

  validates :user_id, :score, presence: true
  validates :score, numericality: true
end
