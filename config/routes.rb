Rails.application.routes.draw do
  resources :notes
  resources :meal_schedules
  resources :recipe_ingredients
  resources :shopping_lists
  resources :user_recipes
  resources :pantry_ingredients
  resources :recipes
  resources :ingredients
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Custom Route: Login
  post "/login", to: "sessions#create"
  # Custom Route: Staying Logged In
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  # Custom Route: Logout
  delete '/logout', to: "sessions#destroy"
  get '/authorised_user', to: 'users#show'

  get '/user_ingredients', to: "ingredients#get_all_user_ingredients"

  post '/add_pantry_ingredients', to: "pantry_ingredients#create"

  post '/add_shopping_list', to: "shopping_lists#create"

  # delete '/delete_pantry_ingredients', to: "pantry_ingredients#destroy"

  post '/fetch_recipes', to: "recipes#fetch_recipes"

  get '/find_recipes', to: "recipes#find_recipes"

  get '/user_favorites', to: "user_recipes#get_favorite_recipes"

  post '/add_favorites', to: "user_recipes#create"

  
  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }

end
