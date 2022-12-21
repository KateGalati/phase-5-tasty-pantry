import React from "react";
import IngredientsPage from "./IngredientsPage";
import RecipePage from "./RecipePage";
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserHome = ({user}) => {

    return (
        <div>
            <h1>User Home Page</h1>
            {/* <ul>
                <li><Button as={Link} to="/home">Home</Button></li>
                <li><Button as={Link} to="/ingredients">Ingredients</Button></li>
                <li><Button as={Link} to="/recipes">Recipes</Button></li>
                <li><Button as={Link} to="/favorites">Favorites</Button></li>
            </ul> */}
        </div>
    )

}

export default UserHome