class DropRecipeTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :meal_schedules
    drop_table :recipe_ingredients
    drop_table :recipes
  end
end
