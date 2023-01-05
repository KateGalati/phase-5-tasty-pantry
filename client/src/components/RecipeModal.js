import React from 'react'

const RecipeModal = (props) => {

    if (!props.show) {
        return null
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4>{props.recipe.title}</h4>
                </div>
                <div className='modal-image'>
                    <img src={props.recipe.image} alt='recipe-image'></img>
                </div>
                <div className='modal-body-two'>
                    Number of Needed Ingredients: {props.recipe.missedIngredientCount}
                </div>
                <div className='modal-body-three'>
                    Number of Pantry Ingredients: {props.recipe.usedIngredientCount}
                </div>
                <div className='modal-body-one'>
                    Likes: {props.recipe.likes}
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='button'>Close</button>
                </div>
            </div>
        </div>
    )

}

export default RecipeModal