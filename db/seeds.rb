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
lantz = Character.create!(character_name: "Lantz", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/7WX0F7m/lantz-idle.png")
obi = Character.create!(character_name: "Obi", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/vqKCbML/obi-idle.png")
trevor = Character.create!(character_name: "Trevor", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/qkRmxLz/trevor-idle.png")
isaac = Character.create!(character_name: "Isaac", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/2s97mz1/isaac-idle.png")
claire = Character.create!(character_name: "Claire", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/4mqBZ9F/claire-idle.png")
josh = Character.create!(character_name: "Josh", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/m83XDvp/josh-idle.png")
abraham = Character.create!(character_name: "Abraham", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/93XHyfJ/abraham-idle.png")
joe = Character.create!(character_name: "Joe", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/dgmnMCD/joe-idle.png")
whiting = Character.create!(character_name: "Whiting", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/4V64DRQ/whiting-idle.png")
ben = Character.create!(character_name: "Ben", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/gMHkXXd/ben-idle.png")
sam = Character.create!(character_name: "Sam", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/mJwK8t6/sam-idle.png")
john = Character.create!(character_name: "John", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/JdMh91t/john-idle.png")
aaron = Character.create!(character_name: "Aaron", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/RpSGWLX/aaron-idle.png")
tate = Character.create!(character_name: "Tate", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/Jr2gNdm/tate-idle.png")
vince = Character.create!(character_name: "Vince", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/NTQ6Hy9/vince-idle.png")

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

klass_skill = KlassSkill.create!(klass_id: Klass.ids.first, skill_id: Skill.ids.first)


puts 'Done seeding'