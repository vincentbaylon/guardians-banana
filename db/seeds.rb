# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'User', password_digest: 'password_digest')

klass = Klass.create!(klass_name: "Fighter", attack_bonus: 1, defense_bonus: 1)

chacter = Character.create!(character_name: "Crash Test Hero", klass_id: klass.id.first, is_hero: true, max_hp: 10)

Battle.create!(player_character_id: 1, non_player_character_id: 1)

high_score = HighScore.create!(user_id: 1, score: 1)

klass_skill = KlassSkill.create!(klass_id: klass.id.first, skill_id: skill.id.first)

skill = Skill.create!(skill_name: 'Gut Punch', flavor_text: "Punches you in the gut Before you can have a chance to block", skill_effect: 5)
