class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :image_url, :current_hp, :skills

  has_many :users

  def skills
    skills = self.object.klass.klass_skills
    # map over klass_skills collection and perform a find for each skill id?
    # byebug
    return skills
  end
end
