import React from 'react'
import {Card} from 'semantic-ui-react'

const IngredientCard = props => {
    const {ingredient, onAddShoppingIngredient} = props
    // const [addErrors, setAddErrors] = useState([])

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

    return (
    <div>
        <div className='all-ingredient-lists'>

            <Card onClick={handleAddIngredient}>
                <Card.Content>
                    <Card.Header>
                        {ingredient.name}
                    </Card.Header>
                </Card.Content>
            </Card>
        </div>
    </div>
    )

}

export default IngredientCard