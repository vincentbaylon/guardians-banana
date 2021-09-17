# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create!(username: 'User1', password_digest: 'password_digest')
Battle.destroy_all
KlassSkill.destroy_all
Skill.destroy_all
UserCharacter.destroy_all
Character.destroy_all
Klass.destroy_all
HighScore.destroy_all
User.destroy_all

fighter  = Klass.create!(klass_name: "Fighter", attack_bonus: 1, defense_bonus: 1)
wizard   = Klass.create!(klass_name: "Wizard", attack_bonus: 1, defense_bonus: 1)
assassin = Klass.create!(klass_name: "Assassin", attack_bonus: 1, defense_bonus: 1)
cleric   = Klass.create!(klass_name: "Cleric", attack_bonus: 1, defense_bonus: 1)

vince_user = User.create!(username: "Vince", password: "password")

# chacter = Character.create!(character_name: "Crash Test Hero", klass_id: lass.id.first, is_hero: true, max_hp: 10)
lantz = Character.create!(character_name: "Lantz", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/7WX0F7m/lantz-idle.png", idle_url: "https://i.ibb.co/Kh2ZtM1/lantz-idle.png", die_url: "https://i.ibb.co/LPVZjp9/lantz-die.png", attack_url: "https://i.ibb.co/bLshDKD/lantz-attack.png")
obi = Character.create!(character_name: "Obi", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/vqKCbML/obi-idle.png", idle_url: "https://i.ibb.co/VDxv6zz/obi-idle.png", die_url: "https://i.ibb.co/F7qz3vt/obi-die.png", attack_url: "https://i.ibb.co/7SnSpgm/obi-attack.png")
trevor = Character.create!(character_name: "Trevor", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/qkRmxLz/trevor-idle.png", idle_url: "https://i.ibb.co/BybSnks/trevor-idle.png", die_url: "https://i.ibb.co/9Yd31f4/trevor-die.png", attack_url: "https://i.ibb.co/bHX3Dy7/trevor-attack.png")
isaac = Character.create!(character_name: "Isaac", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/2s97mz1/isaac-idle.png", idle_url: "https://i.ibb.co/K2Xtw5T/isaac-idle.png", die_url: "https://i.ibb.co/4J394W2/isaac-die.png", attack_url: "https://i.ibb.co/TB0FxFn/isaac-attack.png")
claire = Character.create!(character_name: "Claire", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/4mqBZ9F/claire-idle.png", idle_url: "https://i.ibb.co/smDj97K/claire-idle.png", die_url: "https://i.ibb.co/c2DCsM9/claire-die.png", attack_url: "https://i.ibb.co/mX9Jdh4/claire-attack.png")
josh = Character.create!(character_name: "Josh", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/m83XDvp/josh-idle.png", idle_url: "https://i.ibb.co/j56FKP7/josh-idle.png", die_url: "https://i.ibb.co/fSkqPNn/josh-die.png", attack_url: "https://i.ibb.co/nRDJDJ0/josh-attack.png")
abraham = Character.create!(character_name: "Abraham", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/93XHyfJ/abraham-idle.png", idle_url: "https://i.ibb.co/3BgyBGM/abe-idle.png", die_url: "https://i.ibb.co/2qSnkZq/abe-die.png", attack_url: "https://i.ibb.co/QXnT4mD/abe-attack.png")
joe = Character.create!(character_name: "Joe", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/dgmnMCD/joe-idle.png", idle_url: "https://i.ibb.co/H7SzG9R/joe-idle.png", die_url: "https://i.ibb.co/MZLsJvM/joe-die.png", attack_url: "https://i.ibb.co/ctQdVtN/joe-attack.png")
whiting = Character.create!(character_name: "Whiting", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/4V64DRQ/whiting-idle.png", idle_url: "https://i.ibb.co/X7N9BxL/whiting-idle.png", die_url: "https://i.ibb.co/cyWthZ8/whiting-die.png", attack_url: "https://i.ibb.co/swQ6GYJ/whiting-attack.png")
ben = Character.create!(character_name: "Ben", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/gMHkXXd/ben-idle.png", idle_url: "https://i.ibb.co/y5vX4Gx/ben-idle.png", die_url: "https://i.ibb.co/VLW84T4/ben-die.png", attack_url: "https://i.ibb.co/m90prs7/ben-attack.png")
sam = Character.create!(character_name: "Sam", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/mJwK8t6/sam-idle.png", idle_url: "https://i.ibb.co/gjT82Nb/sam-idle.png", die_url: "https://i.ibb.co/ZxFQGRb/sam-die.png", attack_url: "https://i.ibb.co/5sMSL2X/sam-attack.png")
john = Character.create!(character_name: "John", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/JdMh91t/john-idle.png", idle_url: "https://i.ibb.co/p30pfhP/john-idle.png", die_url: "https://i.ibb.co/8PgR5JZ/john-die.png", attack_url: "https://i.ibb.co/nzgWBkB/john-attack.png")
aaron = Character.create!(character_name: "Aaron", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/RpSGWLX/aaron-idle.png", idle_url: "https://i.ibb.co/9y6Q980/aaron-idle.png", die_url: "https://i.ibb.co/bbxcPm2/aaron-die.png", attack_url: "https://i.ibb.co/FmXHF7s/aaron-attack.png")
tate = Character.create!(character_name: "Tate", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/Jr2gNdm/tate-idle.png", idle_url: "https://i.ibb.co/6Z2w4V4/tate-idle.png", die_url: "https://i.ibb.co/z2bJFmZ/tate-die.png", attack_url: "https://i.ibb.co/VQ3vyW3/tate-attack.png")
vince = Character.create!(character_name: "Vince", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/NTQ6Hy9/vince-idle.png", idle_url: "https://i.ibb.co/XLd5bBD/vince-idle.png", die_url: "https://i.ibb.co/Hpp3CLN/vince-die.png", attack_url: "https://i.ibb.co/sj3NtjV/vince-attack.png")

Battle.create!(player_character_id: lantz.id, non_player_character_id: obi.id)

high_score = HighScore.create!(user_id: vince_user.id, score: 100)

skill = Skill.create!(skill_name: 'Gut Punch', flavor_text: "Punches you in the gut Before you can have a chance to block", skill_effect: 5)

fighter_damage_skill = Skill.create!(skill_name: "Attack Skill", flavor_text: "", skill_effect: 10)
fighter_heal_skill = Skill.create!(skill_name: "Heal Skill", flavor_text: "", skill_effect: 5)
fighter_acc_skill = Skill.create!(skill_name: "Acc Skill", flavor_text: "", skill_effect: 3)
fighter_defense_skill = Skill.create!(skill_name: "Defense Skill", flavor_text: "", skill_effect: 5)

assassin_damage_skill = Skill.create!(skill_name: "Attack Skill", flavor_text: "", skill_effect: 10)
assassin_heal_skill = Skill.create!(skill_name: "Heal Skill", flavor_text: "", skill_effect: 10)
assassin_acc_skill = Skill.create!(skill_name: "Acc Skill", flavor_text: "", skill_effect: 6)
assassin_defense_skill = Skill.create!(skill_name: "Defense Skill", flavor_text: "", skill_effect: 10)

cleric_damage_skill = Skill.create!(skill_name: "Attack Skill", flavor_text: "", skill_effect: 10)
cleric_heal_skill = Skill.create!(skill_name: "Heal Skill", flavor_text: "", skill_effect: 10)
cleric_acc_skill = Skill.create!(skill_name: "Acc Skill", flavor_text: "", skill_effect: 2)
cleric_defense_skill = Skill.create!(skill_name: "Defense Skill", flavor_text: "", skill_effect: 10)

wizard_damage_skill = Skill.create!(skill_name: "Attack Skill", flavor_text: "", skill_effect: 10)
wizard_heal_skill = Skill.create!(skill_name: "Heal Skill", flavor_text: "", skill_effect: 10)
wizard_acc_skill = Skill.create!(skill_name: "Acc Skill", flavor_text: "", skill_effect: 5)
wizard_defense_skill = Skill.create!(skill_name: "Defense Skill", flavor_text: "", skill_effect: 10)

KlassSkill.create!(klass_id: fighter.id, skill_id: fighter_damage_skill.id)
KlassSkill.create!(klass_id: fighter.id, skill_id: fighter_heal_skill.id)
KlassSkill.create!(klass_id: fighter.id, skill_id: fighter_acc_skill.id)
KlassSkill.create!(klass_id: fighter.id, skill_id: fighter_defense_skill.id)
KlassSkill.create!(klass_id: wizard.id, skill_id: wizard_damage_skill.id)
KlassSkill.create!(klass_id: wizard.id, skill_id: wizard_heal_skill.id)
KlassSkill.create!(klass_id: wizard.id, skill_id: wizard_acc_skill.id)
KlassSkill.create!(klass_id: wizard.id, skill_id: wizard_defense_skill.id)
KlassSkill.create!(klass_id: assassin.id, skill_id:assassin_damage_skill.id)
KlassSkill.create!(klass_id: assassin.id, skill_id:assassin_heal_skill.id)
KlassSkill.create!(klass_id: assassin.id, skill_id:assassin_acc_skill.id)
KlassSkill.create!(klass_id: assassin.id, skill_id:assassin_defense_skill.id)
KlassSkill.create!(klass_id: cleric.id, skill_id:cleric_damage_skill.id)
KlassSkill.create!(klass_id: cleric.id, skill_id:cleric_heal_skill.id)
KlassSkill.create!(klass_id: cleric.id, skill_id:cleric_acc_skill.id)
KlassSkill.create!(klass_id: cleric.id, skill_id:cleric_defense_skill.id)

puts 'Done seeding'