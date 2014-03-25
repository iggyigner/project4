# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140325221023) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: true do |t|
    t.integer  "user_id"
    t.integer  "photo_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "likes", ["photo_id"], name: "index_likes_on_photo_id", using: :btree
  add_index "likes", ["user_id", "photo_id"], name: "index_likes_on_user_id_and_photo_id", unique: true, using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "photo_colors", force: true do |t|
    t.integer  "photo_id"
    t.string   "original_color"
    t.string   "reference_color"
    t.float    "frequency"
    t.integer  "distance"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "photo_colors", ["distance"], name: "index_photo_colors_on_distance", using: :btree
  add_index "photo_colors", ["frequency"], name: "index_photo_colors_on_frequency", using: :btree
  add_index "photo_colors", ["original_color"], name: "index_photo_colors_on_original_color", using: :btree
  add_index "photo_colors", ["photo_id"], name: "index_photo_colors_on_photo_id", using: :btree
  add_index "photo_colors", ["reference_color"], name: "index_photo_colors_on_reference_color", using: :btree

  create_table "photos", force: true do |t|
    t.string   "name"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "user_id"
  end

  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "hashed_password"
    t.string   "salt"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
