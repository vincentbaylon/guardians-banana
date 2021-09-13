# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'User', password_digest: 'password_digest')

klass = Klass.create!(klass_name: "Fighter", attack_bonus: 1, defense_bonus: 1)

chacter = Character.create!(character_name: "Crash Test Hero", klass_id: 1, is_hero: true, max_hp: 10)

Battle.create!(player_character_id: 1, non_player_character_id: 1)