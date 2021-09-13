class Klass < ApplicationRecord
 has_many :characters
 has_many :klass_skills
 has_many :skills, through: :klass_skills
end
