import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const PantryIngredientCard = ({ingredient, onAddShoppingIngredient, handleDeletePantryItem}) => {
    const {id, name} = ingredient

    const handleAddIngredient = () => {
        fetch("/add_shopping_list", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ingredient_id: ingredient.id
            }),
          })
          .then(resp => resp.json())
          .then(newIngredient => onAddShoppingIngredient(newIngredient))
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

    const handleDeleteClick = () => {
        fetch(`/pantry_ingredients/${id}`, {
            method: 'DELETE'
          })
          handleDeletePantryItem(id)
    }

    return (
        <div>
            <div className='pantry-ingredient-list'>
                <Card>
                    {/* need to add onclick to handle the delete ingredient function */}
                    <Card.Content>
                        <Card.Header>
                            {name}
                        </Card.Header>
                        <Button onClick={handleAddIngredient}>shopping list</Button>
                        <Button onClick={handleDeleteClick}>delete</Button>
                    </Card.Content>
                </Card>
            </div>
        </div>
        )

}

export default PantryIngredientCard