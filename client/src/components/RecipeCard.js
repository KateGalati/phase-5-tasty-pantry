import React from 'react'
// import RecipeModal from './RecipeModal'
import {Card} from 'semantic-ui-react'

const RecipeCard = ({recipe, onSelectRecipe}) => {



    return (
        <div onClick={() => onSelectRecipe(recipe)} className='recipe-card'>
            <Card fluid>
                <img src={recipe.image} height={300} width={300} alt="recipe"/>
                <Card.Content>
                    <Card.Header>{recipe.title}</Card.Header>
                </Card.Content>
                <button>Add to Favorites</button>
            </Card>
        </div>
    )

}

export default RecipeCard