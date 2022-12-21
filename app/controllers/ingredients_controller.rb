class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all
        render json: ingredients, except: [:created_at, :updated_at], status: :ok
    end

    def get_all_user_ingredients
        current_user = User.find_by(id: session[:user_id])
        users_ingredients = {
            pantry: current_user.ingredients_in_pantry,
            shopping_list: current_user.ingredients_in_shopping_list
            # all_ingredients: Ingredient.all
        }
        render json: users_ingredients, status: :ok
    end
    
end
