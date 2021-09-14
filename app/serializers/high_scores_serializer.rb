class HighScoresSerializer < ActiveModel::Serializer
  attributes :id, :username


  def name
    self.object.name
  end
end
