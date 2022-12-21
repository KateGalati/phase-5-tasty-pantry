import React from 'react'
import {Card} from 'semantic-ui-react'

const RecipeCard = ({searchRecipe}) => {

    return (
        <div className='recipe-card'>
            <Card ui fluid card color='olive'>
                <img src={searchRecipe.image} wrapped ui={false} height={300} width={300} alt="recipe"/>
                <Card.Content>
                    <Card.Header>{searchRecipe.title}</Card.Header>
                </Card.Content>
            </Card>
        </div>
    )

}

export default RecipeCard