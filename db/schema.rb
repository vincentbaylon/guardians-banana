# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_12_004523) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "battles", force: :cascade do |t|
    t.integer "player_character_id", null: false
    t.integer "non_player_character_id", null: false
    t.integer "hero_hp"
    t.integer "enemy_hp"
    t.integer "turn", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "character_name"
    t.string "image_url"
    t.bigint "klass_id", null: false
    t.boolean "is_hero", default: false
    t.integer "max_hp", default: 100
    t.integer "current_hp"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["klass_id"], name: "index_characters_on_klass_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "high_scores", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_high_scores_on_user_id"
  end

  create_table "klass_skills", force: :cascade do |t|
    t.bigint "klass_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["klass_id"], name: "index_klass_skills_on_klass_id"
    t.index ["skill_id"], name: "index_klass_skills_on_skill_id"
  end

  create_table "klasses", force: :cascade do |t|
    t.string "klass_name"
    t.integer "attack_bonus"
    t.integer "defense_bonus"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill_name"
    t.text "flavor_text"
    t.integer "skill_effect"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "high_scores", "users"
  add_foreign_key "klass_skills", "klasses"
  add_foreign_key "klass_skills", "skills"
end
