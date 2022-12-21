class MealScheduleSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
  has_one :recipe
end
