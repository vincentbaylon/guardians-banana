class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.integer :klass, foriegn_key: true
      t.boolean :is_hero
      t.integer :max_hp

      t.timestamps
    end
  end
end
