class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user_recipe
end
