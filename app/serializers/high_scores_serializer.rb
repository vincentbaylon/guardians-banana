class HighScoresSerializer < ActiveModel::Serializer
  attributes :id, :username, 


  has_many :users,
end
