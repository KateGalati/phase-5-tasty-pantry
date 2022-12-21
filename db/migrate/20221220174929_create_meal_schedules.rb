class CreateMealSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :meal_schedules do |t|
      t.date :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
