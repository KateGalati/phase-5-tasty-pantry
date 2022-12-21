import React from 'react'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'


const RecipeList = ({searchRecipes}) => {

    const renderRecipes = searchRecipes.map(searchRecipe => <Link key={searchRecipe.id}><RecipeCard key={searchRecipe.id} searchRecipe={searchRecipe}/></Link>)

    return (
        <div>
            <h3>Recipes</h3>
            <Card.Group centered>
                {renderRecipes}
            </Card.Group>
        </div>
    )

}

export default RecipeList