class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    has_many :user_recipes
    has_many :users, through: :user_recipes

    has_many :meal_schedules
    has_many :users, through: :meal_schedules

    def get_recipe_ingredients
        recipe_ingredients.map {|recipe_ingredient| recipe_ingredient.ingredient}
    end

    def get_user_recipes
        user_recipes.map {|user_recipe| user_recipe.recipe}
    end 
end
