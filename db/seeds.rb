# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create!(username: 'User1', password_digest: 'password_digest')

fighter  = Klass.create!(klass_name: "Fighter", attack_bonus: 1, defense_bonus: 1)
wizard   = Klass.create!(klass_name: "Wizard", attack_bonus: 1, defense_bonus: 1)
assassin = Klass.create!(klass_name: "Assassin", attack_bonus: 1, defense_bonus: 1)
cleric   = Klass.create!(klass_name: "Cleric", attack_bonus: 1, defense_bonus: 1)

# chacter = Character.create!(character_name: "Crash Test Hero", klass_id: lass.id.first, is_hero: true, max_hp: 10)
lantz   = Character.create!(character_name: "Lantz", klass_id: wizard.id, is_hero: true)
obi     = Character.create!(character_name: "Obi", klass_id: assassin.id, is_hero: true)
trevor  = Character.create!(character_name: "Trevor", klass_id: fighter.id, is_hero: true)
isaac   = Character.create!(character_name: "Isaac", klass_id: fighter.id, is_hero: true)
claire  = Character.create!(character_name: "Claire", klass_id: assassin.id, is_hero: true)
josh    = Character.create!(character_name: "Josh", klass_id: cleric.id, is_hero: true)
abraham = Character.create!(character_name: "Abraham", klass_id: cleric.id, is_hero: true)
joe     = Character.create!(character_name: "Joe", klass_id: wizard.id, is_hero: true)
whiting = Character.create!(character_name: "Whiting", klass_id: assassin.id, is_hero: true)
ben     = Character.create!(character_name: "Ben", klass_id: wizard.id, is_hero: true)
sam     = Character.create!(character_name: "Sam", klass_id: wizard.id, is_hero: true)
john    = Character.create!(character_name: "John", klass_id: fighter.id, is_hero: true)
aaron   = Character.create!(character_name: "Aaron", klass_id: cleric.id, is_hero: true)
tate    = Character.create!(character_name: "Tate", klass_id: cleric.id, is_hero: true)
vince   = Character.create!(character_name: "Vince", klass_id: assassin.id, is_hero: true)

Battle.create!(player_character_id: 1, non_player_character_id: 1)
User.create!(username: 'Taters', password_digest: 'password')
high_score = HighScore.create!(user_id: 1, score: 1)
skill = Skill.create!(skill_name: 'Gut Punch', flavor_text: "Punches you in the gut Before you can have a chance to block", skill_effect: 5)

klass_skill = KlassSkill.create!(klass_id: Klass.ids.first, skill_id: Skill.ids.first)


