class PhotosController < ApplicationController
  def index
  	@photos = Photo.all
  end

  def new
  	@photo = Photo.new
  end

  def create
    puts params.inspect
    if params[:url]
      @photo = Photo.new(url: params[:url], user: current_user)
    else
  		@photo = Photo.new(photo_params)
    end
    
    puts("hello world")
		if @photo.save
			#redirect_to photo_path(@photo)
			redirect_to photos_path
		else
			render action: 'new'
		end
  end

  def show
  	@photo = Photo.find(params[:id])
  end

  def destroy
  end

	private
	def photo_params
		params.require(:photo).permit(:url, :image, :authenticity_token)
	end
end
