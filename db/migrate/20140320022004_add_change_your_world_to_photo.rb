class AddChangeYourWorldToPhoto < ActiveRecord::Migration
  def change
    add_reference :photos, :user, index: true
  end
end
