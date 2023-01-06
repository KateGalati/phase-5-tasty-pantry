class AddStuffToUserRecipe < ActiveRecord::Migration[7.0]
  def change
    add_column :user_recipes, :recipe_title, :string
    add_column :user_recipes, :recipe_image, :string
  end
end
