import React from 'react'
import SearchIngredients from './SearchIngredients'
import IngredientsList from './IngredientsList'
import AddIngredient from './AddIngredient'


const IngredientsPage = ({ingredients, changeSearchIngredients, pantry, shoppingList, onAddPantryIngredient, handleDeletePantryItem}) => {

    return (
    <div>
        <IngredientsList changeSearchIngredients={changeSearchIngredients} ingredients={ingredients} pantry={pantry} shoppingList={shoppingList} onAddPantryIngredient={onAddPantryIngredient} handleDeletePantryItem={handleDeletePantryItem}/>
    </div>
    )

}

export default IngredientsPage