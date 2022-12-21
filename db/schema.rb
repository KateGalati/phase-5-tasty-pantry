# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_20_175010) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.integer "api_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meal_schedules", force: :cascade do |t|
    t.date "date"
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_meal_schedules_on_recipe_id"
    t.index ["user_id"], name: "index_meal_schedules_on_user_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "note"
    t.bigint "user_recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_recipe_id"], name: "index_notes_on_user_recipe_id"
  end

  create_table "pantry_ingredients", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ingredient_id", null: false
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_pantry_ingredients_on_ingredient_id"
    t.index ["user_id"], name: "index_pantry_ingredients_on_user_id"
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.bigint "ingredient_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_recipe_ingredients_on_ingredient_id"
    t.index ["recipe_id"], name: "index_recipe_ingredients_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "title"
    t.string "instructions"
    t.integer "ready_in_minutes"
    t.integer "servings"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shopping_lists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ingredient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_shopping_lists_on_ingredient_id"
    t.index ["user_id"], name: "index_shopping_lists_on_user_id"
  end

  create_table "user_recipes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.boolean "favorite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_user_recipes_on_recipe_id"
    t.index ["user_id"], name: "index_user_recipes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "meal_schedules", "recipes"
  add_foreign_key "meal_schedules", "users"
  add_foreign_key "notes", "user_recipes"
  add_foreign_key "pantry_ingredients", "ingredients"
  add_foreign_key "pantry_ingredients", "users"
  add_foreign_key "recipe_ingredients", "ingredients"
  add_foreign_key "recipe_ingredients", "recipes"
  add_foreign_key "shopping_lists", "ingredients"
  add_foreign_key "shopping_lists", "users"
  add_foreign_key "user_recipes", "recipes"
  add_foreign_key "user_recipes", "users"
end
