import {useState} from 'react'
import RecipeCard from './RecipeCard'
import RecipeModal from './RecipeModal'
import { Card, Button } from 'semantic-ui-react'


const RecipeList = ({displayRecipes, handleClick, onAddFavorite}) => {
    const [show, setShow] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const onSelectRecipe = (chosenRecipe) => {
        setSelectedRecipe(chosenRecipe)
        setShow(true)
    }

    const handleAddFavorite = (recipe) => {
        fetch("/add_favorites", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id: recipe.id,
                recipe_image: recipe.image,
                recipe_title: recipe.title
            })
        })
        .then(resp => resp.json())
        .then(userRecipeId => onAddFavorite({
            id: userRecipeId,
            recipe_id: recipe.id,
            recipe_image: recipe.image,
            recipe_title: recipe.title
        }))
    }

    return (
        <div>
            <div>
                <Button onClick={handleClick}>More Recipes</Button>
            </div>
            <div>
                <Card.Group centered onClick={() => setShow(true)}>
                {displayRecipes.map(recipe => <RecipeCard onSelectRecipe={onSelectRecipe} handleAddFavorite={handleAddFavorite} key={recipe.id} recipe={recipe} onAddFavorite={onAddFavorite}/>)}
                </Card.Group>
                <RecipeModal onClose={() => setShow(false)} show={show} recipe={selectedRecipe}/>
            </div>
        </div>
    )

}

export default RecipeList