class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :image_url

  has_many :users
end
