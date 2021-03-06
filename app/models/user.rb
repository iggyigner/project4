require 'bcrypt'

class User < ActiveRecord::Base
	has_many :photos
	#has_many :favorites
	# has_many :photos, through: :favorites
	has_many :likes
	has_many :liked_photos, through: :likes, source: :photo


	attr_accessor :password

	def authenticated? pwd
		self.hashed_password == BCrypt::Engine.hash_secret(pwd, self.salt)
	end

	before_save :hash_stuff

	private
	def hash_stuff
		self.salt = BCrypt::Engine.generate_salt
	  	self.hashed_password = BCrypt::Engine.hash_secret(self.password, self.salt)
	  	self.password = nil
	end
end
