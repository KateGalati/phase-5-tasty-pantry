class Ingredient < ApplicationRecord
    has_many :recipe_ingredients 
    has_many :recipes, through: :recipe_ingredients

    has_many :shopping_lists
    has_many :users, through: :shopping_lists

    has_many :pantry_ingredients 
    has_many :users, through: :pantry_ingredients

    def ingredients_in_recipe
        recipe_ingredients.map { |recipe_ingredient| recipe_ingredient.recipe}
    end

end


