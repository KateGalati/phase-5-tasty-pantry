class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :ingredient
end
