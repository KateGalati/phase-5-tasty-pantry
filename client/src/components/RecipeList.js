import React from 'react'
import RecipeCard from './RecipeCard'
import { Card, Button } from 'semantic-ui-react'


const RecipeList = ({displayRecipes, handleClick}) => {


    // const renderRecipes = displayRecipes.map(displayRecipe => <Link key={displayRecipe.id}><RecipeCard key={displayRecipe.id} displayRecipe={displayRecipe}/></Link>)


    return (
        <div>
            <div>
                <Button onClick={handleClick}>More Recipes</Button>
            </div>
            <div>
                <Card.Group centered>
                {displayRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
                </Card.Group>
            </div>
        </div>
    )

}

export default RecipeList