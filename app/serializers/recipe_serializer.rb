class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :ready_in_minutes, :servings, :image_url
end
