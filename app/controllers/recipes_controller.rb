class RecipesController < ApplicationController

    def fetch_recipes
        response = JSON.parse(RestClient.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=63cf8816309d4a28a1faa5d44f4caff4&number=10&ranking=1&#{params[:searchRecipes]}"))
        render json: response, status: :ok
    end

    def find_recipes
        current_user = User.find_by(id: session[:user_id])
        api_ingredients = current_user.ingredients_in_pantry.map{ |i| i.name}.join(',+')
        response = JSON.parse(RestClient.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=63cf8816309d4a28a1faa5d44f4caff4&number=20&ranking=1&ingredients=#{api_ingredients}"))
        render json: response, status: :ok
    end
end
