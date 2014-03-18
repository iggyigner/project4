class Photo < ActiveRecord::Base
	belongs_to :user

	has_attached_file :image, 
		:styles => { 
			:medium => "300x300>", 
			:thumb => "100x100>" }, 
			:default_url => "/images/:style/missing.png"
  
  #verifies that image content type has a image/something (png, jpeg, whatever).
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
