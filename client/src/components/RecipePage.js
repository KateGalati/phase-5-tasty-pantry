import {useEffect, useState} from 'react'
import MealSchedule from './MealSchedule'
import SearchRecipes from './SearchRecipes'
import RecipeList from './RecipeList'
import EditRecipe from './EditRecipe'
import RecipeFeature from './RecipeFeature'
import AddRecipe from './AddRecipe'

const RecipePage = ({onAddFavorite}) => {
    const [recipes, setRecipes] = useState([])
    const [displayRecipes, setDisplayRecipes] = useState([])
    // const [showMoreRecipes, setShowMoreRecipes] = useState(true)

    useEffect(() => {
        fetch("/find_recipes")
        .then(resp => resp.json())
        .then(data => {
            setRecipes(data)
            setDisplayRecipes([...data].sort(() => Math.random() - 0.5).slice(0, 8))
        })
      }, [])

    const showRandomRecipes = () => {
        setDisplayRecipes([...recipes].sort(() => Math.random() - 0.5).slice(0, 8))
    }

    const handleClick = () => {
        showRandomRecipes()
    }

    return (
        <div className="recipes-search-bar">
            <RecipeList displayRecipes={displayRecipes} handleClick={handleClick} onAddFavorite={onAddFavorite}/>
        </div>
    )

}

export default RecipePage