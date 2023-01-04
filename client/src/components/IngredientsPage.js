import React from 'react'
import IngredientsList from './IngredientsList'


const IngredientsPage = ({ingredients, changeSearchIngredients, pantry, shoppingList, onAddPantryIngredient, onAddShoppingIngredient, handleDeletePantryItem, handleDeleteShoppingItem}) => {

    return (
    <div>
        <IngredientsList changeSearchIngredients={changeSearchIngredients} ingredients={ingredients} pantry={pantry} shoppingList={shoppingList} onAddPantryIngredient={onAddPantryIngredient} onAddShoppingIngredient={onAddShoppingIngredient} handleDeletePantryItem={handleDeletePantryItem} handleDeleteShoppingItem={handleDeleteShoppingItem}/>
    </div>
    )

}

export default IngredientsPage