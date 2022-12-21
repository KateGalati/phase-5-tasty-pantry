class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id
  has_one :ingredient
  has_one :recipe
end
