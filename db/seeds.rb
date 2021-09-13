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
Character.destroy_all
Klass.destroy_all
HighScore.destroy_all
User.destroy_all

fighter  = Klass.create!(klass_name: "Fighter", attack_bonus: 1, defense_bonus: 1)
wizard   = Klass.create!(klass_name: "Wizard", attack_bonus: 1, defense_bonus: 1)
assassin = Klass.create!(klass_name: "Assassin", attack_bonus: 1, defense_bonus: 1)
cleric   = Klass.create!(klass_name: "Cleric", attack_bonus: 1, defense_bonus: 1)

vince_user = User.create!(username: "Vince", password_digest: "password")

# chacter = Character.create!(character_name: "Crash Test Hero", klass_id: lass.id.first, is_hero: true, max_hp: 10)
lantz = Character.create!(character_name: "Lantz", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/kqVFqBp/lantz-idle.png", user_id: vince_user.id)
obi = Character.create!(character_name: "Obi", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/b2SPymF/obi-idle.png", user_id: vince_user.id)
trevor = Character.create!(character_name: "Trevor", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/2N1Nw8Z/trevor-idle.png", user_id: vince_user.id)
isaac = Character.create!(character_name: "Isaac", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/tmXvS99/isaac-idle.png", user_id: vince_user.id)
claire = Character.create!(character_name: "Claire", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/F5GBbhn/claire-idle.png", user_id: vince_user.id)
josh = Character.create!(character_name: "Josh", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/q0CQtJz/josh-idle.png", user_id: vince_user.id)
abraham = Character.create!(character_name: "Abraham", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/mXB7sX5/abraham-idle.png", user_id: vince_user.id)
joe = Character.create!(character_name: "Joe", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/1Kh3S5X/joe-idle.png", user_id: vince_user.id)
whiting = Character.create!(character_name: "Whiting", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/mSqk8wH/whiting-idle.png", user_id: vince_user.id)
ben = Character.create!(character_name: "Ben", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/5vL4wFz/ben-idle.png", user_id: vince_user.id)
sam = Character.create!(character_name: "Sam", klass_id: wizard.id, is_hero: true, image_url: "https://i.ibb.co/vYnMCqq/sam-idle.png", user_id: vince_user.id)
john = Character.create!(character_name: "John", klass_id: fighter.id, is_hero: true, image_url: "https://i.ibb.co/fqCrsVR/john-idle.png", user_id: vince_user.id)
aaron = Character.create!(character_name: "Aaron", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/s9zHK8Y/aaron-idle.png", user_id: vince_user.id)
tate = Character.create!(character_name: "Tate", klass_id: cleric.id, is_hero: true, image_url: "https://i.ibb.co/7gjJdvW/tate-idle.png", user_id: vince_user.id)
vince = Character.create!(character_name: "Vince", klass_id: assassin.id, is_hero: true, image_url: "https://i.ibb.co/ky99V9y/vince-idle.png", user_id: vince_user.id)

Battle.create!(player_character_id: lantz.id, non_player_character_id: obi.id)

high_score = HighScore.create!(user_id: vince_user.id, score: 100)


klass_skill = KlassSkill.create!(klass_id: Klass.ids.first, skill_id: Skill.ids.first)



puts 'Done seeding'
