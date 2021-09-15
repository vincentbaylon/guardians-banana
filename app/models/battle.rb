class Battle < ApplicationRecord
  belongs_to :player_character, class_name: 'Character'
  belongs_to :non_player_character, class_name: 'Character'
  
  def attack(attacker, defender, skill_id)
    to_hit = rand(1..6)
    damage_roll = rand(1..10)
    skill = Skill.find_by(id: skill_id)

    # case skill_name
    # when 'damage'
    #   damage_roll = skill_effect
    # when 'heal'
    #   attacker.current_hp += skill_effect
    # when 'acc'
    #   to_hit = rand(skill_effect..6)
    # end

    case to_hit
    when 6
      self.damage = damage_roll - defender.klass.defense_bonus 
      defender.current_hp -= damage
      self.attack_type = 'Hit'
    when 4, 5
      self.damage = (damage_roll - defender.klass.defense_bonus) / 2
      defender.current_hp -= damage
      self.attack_type = 'Glancing Blow'
    else
      self.attack_type = 'Miss'
    end
    self.turn += 1
    defender.save
    save!
  end
end
