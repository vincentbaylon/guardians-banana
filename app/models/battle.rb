class Battle < ApplicationRecord
  belongs_to :player_character, class_name: 'Character'
  belongs_to :non_player_character, class_name: 'Character'
  
  def attack(attacker, defender, skill_id)
    to_hit = rand(1..6)
    damage_roll = rand(10..20)
    skill = Skill.find_by(id: skill_id[:skill_id])
    effect = skill.skill_effect
  

    case skill.skill_name
    when 'Attack Skill'
      damage_roll = effect
    when 'Heal Skill'
      attacker.current_hp += effect
    when 'Acc Skill'
      to_hit = rand(effect..6)
    end

    case to_hit
    when 6
      self.damage = damage_roll - defender.klass.defense_bonus 
      defender.current_hp -= damage
      self.attack_type = 'Hit'
    when 3, 4, 5
      self.damage = (damage_roll - defender.klass.defense_bonus) / 2
      defender.current_hp -= damage
      self.attack_type = 'Glancing Blow'
    else
      self.attack_type = 'Miss'
    end
    puts "Roll: #{to_hit}"
    self.turn += 1
    defender.save
    save!
  end
end
