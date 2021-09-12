class Skill < ApplicationRecord
  has_many :klass_skills
  has_many :klasses, through: :klass_skills
end
