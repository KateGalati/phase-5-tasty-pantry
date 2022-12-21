import React from 'react'
import IngredientCard from './IngredientCard'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const IngredientsList = props => {
    const {ingredients} = props

    const renderIngredientsList = ingredients.map(ingredient => <Link key={ingredient.id}><IngredientCard key={ingredient.id} ingredient={ingredient}/></Link>)

    return (
        <div>
            <h3>Full Ingredient List</h3>
            <Card.Group centered>
                {renderIngredientsList}
            </Card.Group>
        </div>
    )

}

export default IngredientsList