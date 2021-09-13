class CreateBattles < ActiveRecord::Migration[6.1]
  def change
    create_table :battles do |t|
      t.integer :player_character_id, null: false, foreign_key: true 
      t.integer :non_player_character_id, null: false, foreign_key: true
      t.integer :hero_hp
      t.integer :enemy_hp
      t.integer :turn, default: 0

      t.timestamps
    end
  end
end
