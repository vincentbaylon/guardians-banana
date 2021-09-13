class Battle < ApplicationRecord
  belongs_to :player_character, class_name: 'Character'
  belongs_to :non_player_character, class_name: 'Character'

  def attack(attacker, defender)
    attacker = attacker
    defender = defender
    roll = rand(1..6)
    case roll
    when 6
      damage = rand(1..10)
      # defender.current_hp -= damage
      attack = 'Hit'
    when 4, 5
      damage = rand(1..10) / 2
      # defender.current_hp -= damage
      attack = 'Glancing Blow'
    else
      attack = 'Miss'
    end
    self.turn += 1
    save!
  end
end
