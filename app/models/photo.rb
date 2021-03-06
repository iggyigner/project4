require 'open-uri'
class Photo < ActiveRecord::Base
	belongs_to :user
  has_colors
  has_many :photo_colors
	#has_many :favorites
	#has_many :users, through: :favorites
	has_many :likes

	has_attached_file :image, 
		:styles => { 
			:original => '800x800',
			:medium => "500x500>", 
			:thumb => "100x100>" }, 
			:default_url => "/images/:style/missing.png"
  
  #verifies that image content type has a image/something (png, jpeg, whatever).
  # validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  do_not_validate_attachment_file_type :image, :content_type => /\Aimage\/.*\Z/

  def image_url=(url)
  	self.image = open(url)
  end
end



