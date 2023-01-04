import React from 'react'
import {Card} from 'semantic-ui-react'

const RecipeCard = ({recipe}) => {

    return (
        <div className='recipe-card'>
            <Card ui fluid card color='olive'>
                <img src={recipe.image} height={300} width={300} alt="recipe"/>
                <Card.Content>
                    <Card.Header>{recipe.title}</Card.Header>
                </Card.Content>
            </Card>
        </div>
    )

}

export default RecipeCard