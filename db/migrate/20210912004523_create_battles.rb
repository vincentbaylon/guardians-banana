class CreateBattles < ActiveRecord::Migration[6.1]
  def change
    create_table :battles do |t|
      t.integer :player_character_id, null: false, foreign_key: true 
      t.integer :non_player_character_id, null: false, foreign_key: true
      t.integer :turn, default: 1
      t.integer :damage
      t.string :attack_type

      t.timestamps
    end
  end
end
