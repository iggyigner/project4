class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.references :user, index: true
      t.references :photo, index: true

      t.timestamps
    end

    add_index(:likes, [:user_id, :photo_id], unique: true)
  end
end
