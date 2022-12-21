class CreateUserRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :recipe, null: false, foreign_key: true
      t.boolean :favorite

      t.timestamps
    end
  end
end
