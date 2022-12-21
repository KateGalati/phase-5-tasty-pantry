class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :note
      t.belongs_to :user_recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
