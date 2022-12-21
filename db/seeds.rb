require 'csv'

puts 'Clearing Database'

User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
PantryIngredient.destroy_all
ShoppingList.destroy_all
UserRecipe.destroy_all
RecipeIngredient.destroy_all
MealSchedule.destroy_all
Note.destroy_all

puts 'Database Cleared'

puts 'Creating Users'

u1 = User.create(username: "Kate", email: 'pinapple@gmail.com', password: '1111')
u2 = User.create(username: "Matt", email: 'apple@gmail.com', password: '1111')

puts 'Users Created'

puts 'Creating Recipes'
r1 = Recipe.create(title: 'tester crepes', instructions: 'mix and cook', ready_in_minutes: 15, servings: 2, image_url: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Crepes-10-650x975.jpg')
puts 'Recipes Created'

puts 'Creating Ingredients'

# CSV.foreach(Rails.root.join('lib', 'seeds', 'ingredients.csv'), headers: true) do |row|
#     Ingredient.create( {
#         name: row["name"],
#         api_id: row["api_id"]
#     })
# end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'ingredients.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
   t = Ingredient.new
   t.name = row['name']
   t.api_id = row['api_id']
   t.save
   puts "#{t.name}, #{t.api_id} saved"
end

puts "There are now #{Ingredient.count} rows in the ingredients table"

puts "Creating Pantry Ingredients"
pi1 = PantryIngredient.create(user: u1, ingredient: Ingredient.first, amount: 1)
pi2 = PantryIngredient.create(user: u1, ingredient: Ingredient.second, amount: 1)
puts "Pantry Ingredients created"

puts "Creating Shopping List"
s1 = ShoppingList.create(user: u1, ingredient: Ingredient.third)
s2 = ShoppingList.create(user: u1, ingredient: Ingredient.last)
puts "Shopping List Created"

puts "Creating User Recipes"
ur1 = UserRecipe.create(user: u1, recipe: r1, favorite: true)
puts "User Recipes Created"

puts "Creating Recipe Ingredients"
ri1 = RecipeIngredient.create(ingredient: Ingredient.first, recipe: r1)
ri2 = RecipeIngredient.create(ingredient: Ingredient.second, recipe: r1)
ri3 = RecipeIngredient.create(ingredient: Ingredient.third, recipe: r1)
ri4 = RecipeIngredient.create(ingredient: Ingredient.last, recipe: r1)
puts "Recipe Ingredients are Created"

puts "Creating Meal Schedule"
ms1 = MealSchedule.create(date: '2022-12-24', recipe: r1, user: u1)
puts "Meal Schedule Created"

puts "Creating Notes"
n1 = Note.create(user_recipe: ur1, note: "Test note")
puts "Notes Created"


puts 'Seeding done'
