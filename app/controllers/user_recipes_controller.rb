class UserRecipesController < ApplicationController

    def get_favorite_recipes
        current_user = User.find_by(id: session[:user_id])
        user_favorites = {
            user_recipe: current_user.my_recipes
        }
        render json: user_favorites, status: :ok
    end

    def create
        current_user = User.find_by(id: session[:user_id])
        if current_user
            user_recipe = UserRecipe.create!(user_id: current_user.id, recipe_id: favorite_params[:recipe_id], recipe_title: favorite_params[:recipe_title], recipe_image: favorite_params[:recipe_image])
            render json: user_recipe.id, status: :created
        else
            render json: {error: "No user found"}, status: :not_found
        end
    end

    def destroy
        current_user = User.find_by(id: session[:user_id])
        user_recipe = UserRecipe.find_by(user_id: current_user.id, id: params[:id])
        if current_user && user_recipe
            user_recipe.destroy
            head :no_content
        else
            render json: {error: "No user found"}, status: :not_found
        end
    end

    private

    def favorite_params
        params.require(:user_recipe).permit(:recipe_id, :recipe_image, :recipe_title)
    end
    
end
