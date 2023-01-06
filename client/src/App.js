import './App.css';
import {useEffect, useState} from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
// import Signup from './components/Signup';
import NavBar from './components/NavBar';
import IngredientsPage from './components/IngredientsPage';
import RecipePage from './components/RecipePage';
import FavoriteRecipes from './components/FavoriteRecipes';

function App() {
  const [user, setUser] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [pantry, setPantry] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [searchIngredients, setSearchIngredients] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch("/ingredients")
      .then((r) => r.json())
      .then(ingredientData => {
        setIngredients(ingredientData)
      })
  }, [])

  // useEffect(() => {
  //   fetch("/user_ingredients")
  //   .then((r) => r.json())
  //   .then(ingredientData => {
  //     setPantry(ingredientData.pantry)
  //     setShoppingList(ingredientData.shopping_list)
  //   })
  // }, [])

  const handleAddPantryIngredient = newPantryIngredient => {
    setPantry([...pantry, newPantryIngredient])
  }

  const handleAddShoppingIngredient = newShoppingIngredient => {
    setShoppingList([...shoppingList, newShoppingIngredient])
  }

  const handleAddFavoriteRecipe = newFavorite => {
    setFavorites([...favorites, newFavorite])
  }

  const changeSearchIngredients = e => {
    setSearchIngredients(e.target.value)
  }

  let filteredIngredients = []
  if (searchIngredients.length > 0) {
    filteredIngredients = ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(searchIngredients.toLowerCase())) 
  }

  const handleDeletePantryItem = id => {
    const updatedPantryArray = pantry.filter(ingredient => ingredient.id !== id)
    setPantry(updatedPantryArray)
  }

  const handleDeleteShoppingItem = id => {
    const updatedShoppingArray = shoppingList.filter(ingredient => ingredient.id !== id)
    setShoppingList(updatedShoppingArray)
  }

  const handleDeleteFavoriteRecipe = id => {
    const updatedFavoritesArray = favorites.filter(favRecipe => favRecipe.id !== id)
    setFavorites(updatedFavoritesArray)
  }

  const handleLogIn = user => {
    setUser(user)
    fetch("/user_ingredients")
    .then((r) => r.json())
    .then(ingredientData => {
      setPantry(ingredientData.pantry)
      setShoppingList(ingredientData.shopping_list)
    })
    fetch("/user_favorites")
    .then(resp => resp.json())
    .then(recipeData => {
      setFavorites(recipeData.user_recipe)
    })

  }

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  if (!user) return (
  <div>
  <Login onLogin={handleLogIn} />
  <LandingPage />
  </div>
  )

  return (
      <div className="App">
        <NavBar setUser={setUser}/>
        <main>
          <Switch>
            {/* <Route path="/home">
              <UserHome user={user}/>
            </Route> */}
            <Route path="/home">
              <IngredientsPage 
              pantry={pantry}
              ingredients={filteredIngredients}
              changeSearchIngredients={changeSearchIngredients}
              shoppingList={shoppingList}
              onAddPantryIngredient={handleAddPantryIngredient}
              onAddShoppingIngredient={handleAddShoppingIngredient}
              handleDeletePantryItem={handleDeletePantryItem}
              handleDeleteShoppingItem={handleDeleteShoppingItem}
              />
            </Route>
            <Route path="/recipes">
              <RecipePage onAddFavorite={handleAddFavoriteRecipe}/>
            </Route>
            <Route path='/favorites'>
              <FavoriteRecipes favorites={favorites} handleDeleteFavoriteRecipe={handleDeleteFavoriteRecipe}/>
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;
