class Character < ApplicationRecord
belongs_to :klass 
has_many :user_characters
has_many :users, through: :user_characters

has_many :player_characters, class_name: "Battle", foreign_key: "player_character_id"
has_many :non_player_characters, class_name: "Battle", foreign_key: "non_player_character_id"

validates :character_name, :klass_id, :is_hero, :max_hp, presence: true
validates :character_name, length: { in: 3..15 }
validates :max_hp, numericality: true
end
