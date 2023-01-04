import React from 'react'
import {Card} from 'semantic-ui-react'

const ShoppingIngredientCard = ({ingredient}) => {

    return (
        <div>
            <div className='shopping-ingredient-list'>
                <Card>
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

export default ShoppingIngredientCard