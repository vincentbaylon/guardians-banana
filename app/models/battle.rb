class Battle < ApplicationRecord
  belongs_to :player_character, class_name: 'Character'
  belongs_to :non_player_character, class_name: 'Character'

  def attack(attacker, defender)
    roll = rand(1..6) + attacker.klass.attack_bonus

    case roll
    when 6
      self.damage = rand(1..10) - defender.klass.defense_bonus 
      defender.current_hp -= damage
      self.attack_type = 'Hit'
    when 4, 5
      self.damage = (rand(1..10) - defender.klass.defense_bonus) / 2
      defender.current_hp -= damage
      self.attack_type = 'Glancing Blow'
    else
      self.attack_type = 'Miss'
    end
    self.turn += 1
    defender.save
    save!
  end

  def roll(skill_name, skill_effect)
    #will take in two args (the skill args)
    # will evaluate the skill_name and set the skill effect.
    # effects will be added to the random number
    #healing effects will be assigned as a negative value
    skill = skill_name
    effect = skill_effect
  end
end
