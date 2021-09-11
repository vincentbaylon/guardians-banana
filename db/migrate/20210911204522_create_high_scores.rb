class CreateHighScores < ActiveRecord::Migration[6.1]
  def change
    create_table :high_scores do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
