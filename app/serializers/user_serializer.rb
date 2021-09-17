class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :user_characters
  has_many :characters, through: :user_characters
end
