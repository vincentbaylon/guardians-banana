class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.string :image_url
      t.belongs_to :klass, null: false, foriegn_key: true
      t.boolean :is_hero, default: false
      t.integer :max_hp, default: 100
      t.integer :current_hp

      t.timestamps
    end
  end
end
