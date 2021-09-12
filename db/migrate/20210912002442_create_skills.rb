class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :skill_name
      t.text :flavor_text
      t.integer :skill_effect

      t.timestamps
    end
  end
end
