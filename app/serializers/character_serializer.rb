class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :image_url, :current_hp

  has_many :users
end
