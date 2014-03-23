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
      # response = HTTParty.get params[:url]
      @photo = Photo.new(url: params[:url], user_id: current_user.id)
      @photo.image_url = params[:url]
      #binding.pry
    else
  		@photo = Photo.new(photo_params)
    end

    # if current_user
    #   @photo.user_id = current_user.id
    # end
    
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
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to :root
  end

  def like
    user = current_user
    photo = Photo.find(params[:id])
    user.like!(photo)
    redirect_to :root
  end

	private
	def photo_params
		params.require(:photo).permit(:url, :user_id, :user, :image, :authenticity_token)
	end
end
