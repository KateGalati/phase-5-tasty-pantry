import React from 'react'
import { Card } from 'semantic-ui-react'

const FavoriteRecipeCard = ({favRecipe, handleDeleteClick}) => {

    return (
        <div>
            <Card fluid>
                <img src={favRecipe.recipe_image} height={300} width={300} alt="recipe"/>
                <Card.Content>
                    <Card.Header>{favRecipe.recipe_title}</Card.Header>
                </Card.Content>
                <button onClick={() => handleDeleteClick(favRecipe.id)}>Remove</button>
            </Card>
        </div>
    )

}

export default FavoriteRecipeCard