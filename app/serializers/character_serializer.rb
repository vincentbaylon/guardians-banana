class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :image_url, :current_hp

  has_many :user_characters
  has_many :users, through: :user_characters
end
