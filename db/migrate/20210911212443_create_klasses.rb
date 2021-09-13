class CreateKlasses < ActiveRecord::Migration[6.1]
  def change
    create_table :klasses do |t|
      t.string :klass_name
      t.integer :attack_bonus
      t.integer :defense_bonus

      t.timestamps
    end
  end
end
