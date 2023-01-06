class RemoveRecipesFromUserRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_reference :user_recipes, :recipe, null: false, foreign_key: true
    remove_reference :meal_schedules, :recipe, null: false, foreign_key: true
    remove_reference :recipe_ingredients, :recipe, null: false, foreign_key: true
  end
end
