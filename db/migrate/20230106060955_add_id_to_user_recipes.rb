class AddIdToUserRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :user_recipes, :recipe_id, :bigint
  end
end
