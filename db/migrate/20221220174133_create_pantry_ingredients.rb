class CreatePantryIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :pantry_ingredients do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :ingredient, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
