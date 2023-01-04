import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const ShoppingIngredientCard = ({ingredient, onAddPantryIngredient, handleDeleteShoppingItem}) => {
    const {id, name} = ingredient

    const handleAddIngredient = () => {
        fetch("/add_pantry_ingredients", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ingredient_id: ingredient.id
            }),
          })
          .then(resp => resp.json())
          .then(newIngredient => onAddPantryIngredient(newIngredient))
        //   .then((r) => {
        //         if (r.ok) {
        //           r.json().then((newIngredient) => {
        //             onAddPantryIngredient(newIngredient)
        //             setAddErrors([]);
        //           });
        //         } else {
        //           r.json().then((err) => setAddErrors(err.errors));
        //         }
        // })
    }

    const handleDeleteShoppingClick = () => {
        fetch(`/shopping_lists/${id}`, {
            method: 'DELETE'
        })
        handleDeleteShoppingItem(id)
    }

    return (
        <div>
            <div className='shopping-ingredient-list'>
                <Card>
                    {/* need to add an onclick to handle the patch to pantry item */}
                    <Card.Content>
                        <Card.Header>
                            {name}
                        </Card.Header>
                        <Button onClick={handleAddIngredient}>pantry</Button>
                        <Button onClick={handleDeleteShoppingClick}>delete</Button>
                    </Card.Content>
                </Card>
            </div>
        </div>
        )

}

export default ShoppingIngredientCard