import React from 'react'
import SearchIngredients from './SearchIngredients'
import IngredientsList from './IngredientsList'
import AddIngredient from './AddIngredient'

const IngredientsPage = ({ingredients, changeSearchIngredients}) => {

    return (
    <div>
        <div class="ingredients-search-bar">
        Search Ingredients:
        <input placeholder='Ingredient Name...' onChange={changeSearchIngredients}></input>
        </div>
        <div>
            <IngredientsList ingredients={ingredients}/>
        </div>
    </div>
    )

}

export default IngredientsPage