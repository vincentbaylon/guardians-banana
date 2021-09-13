class Battle < ApplicationRecord
  belongs_to :player_character, class_name: 'Character'
  belongs_to :non_player_character, class_name: 'Character'
end
