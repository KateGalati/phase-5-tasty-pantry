class PantryIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount
  has_one :user
  has_one :ingredient
end
