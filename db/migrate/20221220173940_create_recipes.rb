class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :instructions
      t.integer :ready_in_minutes
      t.integer :servings
      t.string :image_url

      t.timestamps
    end
  end
end
