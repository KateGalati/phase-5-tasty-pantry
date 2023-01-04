import React from 'react'
import {Card} from 'semantic-ui-react'

const PantryIngredientCard = ({ingredient, handleDeletePantryItem}) => {

    return (
        <div>
            <div className='pantry-ingredient-list'>
                <Card onClick={handleDeletePantryItem}>
                    <Card.Content>
                        <Card.Header>
                            {ingredient.name}
                        </Card.Header>
                    </Card.Content>
                </Card>
            </div>
        </div>
        )

}

export default PantryIngredientCard