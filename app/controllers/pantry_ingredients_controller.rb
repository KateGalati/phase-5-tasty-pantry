class PantryIngredientsController < ApplicationController

    def create 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            pantry_ingredient = PantryIngredient.create!(user_id: current_user.id, ingredient_id: pantry_ingredient_params[:ingredient_id])
            render json: pantry_ingredient.ingredient, status: :created
        else 
            render json: {error: "No user found"}, status: :not_found
        end

    end 

    def destroy
        current_user = User.find_by(id: session[:user_id])
        pantry_ingredient = PantryIngredient.find_by(ingredient_id: params[:id], user_id: current_user.id)
        if current_user && pantry_ingredient
            pantry_ingredient.destroy
            head :no_content
        else 
            render json: {error: "No user found"}, status: :not_found
        end
    end

    private 

    def pantry_ingredient_params
        params.require(:pantry_ingredient).permit(:ingredient_id)
    end

end
