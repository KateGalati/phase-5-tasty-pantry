class ShoppingListsController < ApplicationController

    def create 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            shopping_ingredient = ShoppingList.create!(user_id: current_user.id, ingredient_id: shopping_ingredient_params[:ingredient_id])
            render json: shopping_ingredient.ingredient, status: :created
        else 
            render json: {error: "No user found"}, status: :not_found
        end
    end

    def destroy
        current_user = User.find_by(id: session[:user_id])
        shopping_ingredient = ShoppingList.find_by(ingredient_id: params[:id], user_id: current_user.id)
        if current_user && shopping_ingredient
            shopping_ingredient.destroy
            head :no_content
        else 
            render json: {error: "No user found"}, status: :not_found
        end
    end

    private

    def shopping_ingredient_params
        params.require(:shopping_list).permit(:ingredient_id)
    end

end
