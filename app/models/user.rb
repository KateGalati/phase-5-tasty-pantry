class User < ApplicationRecord
    has_many :pantry_ingredients
    has_many :ingredients, through: :pantry_ingredients

    has_many :shopping_lists
    has_many :ingredients, through: :shopping_lists

    has_many :user_recipes

    has_secure_password

    def ingredients_in_pantry
        pantry_ingredients.map { |pantry_ingredient| pantry_ingredient.ingredient}
    end 

    def ingredients_in_shopping_list
        shopping_lists.map { |shopped_ingredient| shopped_ingredient.ingredient}
    end

    def my_recipes
        user_recipes.map { |user_recipe| user_recipe}
    end

end
