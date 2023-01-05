import {useState} from 'react'
import RecipeCard from './RecipeCard'
import RecipeModal from './RecipeModal'
import { Card, Button } from 'semantic-ui-react'


const RecipeList = ({displayRecipes, handleClick}) => {
    const [show, setShow] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const onSelectRecipe = (chosenRecipe) => {
        setSelectedRecipe(chosenRecipe)
        setShow(true)
    }

    return (
        <div>
            <div>
                <Button onClick={handleClick}>More Recipes</Button>
            </div>
            <div>
                <Card.Group centered onClick={() => setShow(true)}>
                {displayRecipes.map(recipe => <RecipeCard onSelectRecipe={onSelectRecipe} key={recipe.id} recipe={recipe}/>)}
                </Card.Group>
                <RecipeModal onClose={() => setShow(false)} show={show} recipe={selectedRecipe}/>
            </div>
        </div>
    )

}

export default RecipeList