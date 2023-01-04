import React from 'react'
import IngredientCard from './IngredientCard'
import PantryIngredientCard from './PantryIngredientCard'
import ShoppingIngredientCard from './ShoppingIngredientCard'
import { Card, Input } from 'semantic-ui-react'

const IngredientsList = props => {
    const {changeSearchIngredients, ingredients, pantry, shoppingList, onAddPantryIngredient, onAddShoppingIngredient, handleDeletePantryItem, handleDeleteShoppingItem} = props

    const renderFullIngredientsList = ingredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} onAddShoppingIngredient={onAddShoppingIngredient}/>)
    const renderPantry = pantry.map(pantry_ingredient => <PantryIngredientCard key={pantry_ingredient.id} ingredient={pantry_ingredient} onAddShoppingIngredient={onAddShoppingIngredient} handleDeletePantryItem={handleDeletePantryItem}/>)
    const renderShoppingList = shoppingList.map(shopping_list_ingredient => <ShoppingIngredientCard key={shopping_list_ingredient.id} ingredient={shopping_list_ingredient} onAddPantryIngredient={onAddPantryIngredient} handleDeleteShoppingItem={handleDeleteShoppingItem}/>)


    return (
        <div>

            <div className="ingredients-search-bar">
                Search Ingredients:
                <Input placeholder='Ingredient Name...' onChange={changeSearchIngredients}/>
            </div>

            <Card.Group centered>
            <div className="pantry-ingredients">
                <h3>My Pantry Ingredients</h3>
                    {renderPantry}
            </div>
            </Card.Group>

            <Card.Group centered>
            <div className="shopping-list-ingredients">
                <h3>My Shopping List</h3>
                    {renderShoppingList}
            </div>
            </Card.Group>

            <Card.Group centered itemsPerRow={8}>
            <div className="full-ingredients-list">
                    {renderFullIngredientsList}  
            </div>
            </Card.Group>
        
        </div>
    )

}

export default IngredientsList