import {useEffect, useState} from 'react'
import MealSchedule from './MealSchedule'
import SearchRecipes from './SearchRecipes'
import RecipeList from './RecipeList'
import EditRecipe from './EditRecipe'
import RecipeFeature from './RecipeFeature'
import AddRecipe from './AddRecipe'

const RecipePage = () => {
    const [searchRecipes, setSearchRecipes] = useState([])

    useEffect(() => {
        fetch("/find_recipes")
        .then(resp => resp.json())
        .then(setSearchRecipes)
      }, [])

    return (
        <div class="recipes-search-bar">
            <RecipeList searchRecipes={searchRecipes}/>
        </div>
    )

}

export default RecipePage