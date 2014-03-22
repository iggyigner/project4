class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.references :user, index: true
      t.references :photo, index: true
      t.integer :like_count

      t.timestamps
    end
  end
end
