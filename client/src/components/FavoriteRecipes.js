import React from 'react'
import FavoriteRecipeList from './FavoriteRecipeList'

const FavoriteRecipes = ({favorites, handleDeleteFavoriteRecipe}) => {
    
    return (
        <div>
            <FavoriteRecipeList favorites={favorites} handleDeleteFavoriteRecipe={handleDeleteFavoriteRecipe}/>
        </div>
    )

}

export default FavoriteRecipes