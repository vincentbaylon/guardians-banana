# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(username: 'user', password_digest: 'password')
HighScore.create!(user: user , score: 0)
klass = Klass.create!(klass_name: 'Hero', attack_bonus: 1, defense_bonus: 2)
character = Character.create!(character_name: 'Person', klass: klass, max_hp: 100)

