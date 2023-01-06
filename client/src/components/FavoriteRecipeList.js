import React from 'react'
import FavoriteRecipeCard from './FavoriteRecipeCard'
import { Card } from 'semantic-ui-react'

const FavoriteRecipeList = ({favorites, handleDeleteFavoriteRecipe}) => {

    const handleDeleteClick = (id) => {
        fetch(`/user_recipes/${id}`, {
            method: 'DELETE'
          })
        handleDeleteFavoriteRecipe(id)
    }

    // const renderFavorites = favorites.map(favRecipe => <div key={favRecipe.id}>{favRecipe.recipe_title} <button onClick={() => handleDeleteClick(favRecipe.id)}>Delete</button></div>)
    const renderFavorites = favorites.map(favRecipe => <FavoriteRecipeCard key={favRecipe.id} favRecipe={favRecipe} handleDeleteClick={handleDeleteClick}/>)

    return (
        <div>
            <h3>Favorite Recipes</h3>
            <Card.Group>
                {renderFavorites}
            </Card.Group>
        </div>
    )

}

export default FavoriteRecipeList