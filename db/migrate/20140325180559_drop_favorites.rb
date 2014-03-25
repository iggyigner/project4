class DropFavorites < ActiveRecord::Migration
  def up
  	drop_table :favorites
  end

  def down
    create_table :favorites do |t|
      t.references :user, index: true
      t.references :photo, index: true
      t.integer :like_count

      t.timestamps
    end
  end
end