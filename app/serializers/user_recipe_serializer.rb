class UserRecipeSerializer < ActiveModel::Serializer
  attributes :id, :favorite, :recipe_id, :recipe_title, :recipe_image
  has_one :user
end
