import React from 'react'
import {Card} from 'semantic-ui-react'

const IngredientCard = props => {
    const {ingredient} = props

    return (
        <div className='ingredient-card'>
            <Card ui fluid card color='olive'>
                <Card.Content>
                    <Card.Header>{ingredient.name}</Card.Header>
                </Card.Content>
            </Card>

        </div>
    )

}

export default IngredientCard