class PhotosController < ApplicationController
  def index
  	@photos = Photo.all
    @colors = ["660000", "990000", "cc0000", "cc3333", "ea4c88",
    "993399", "663399", "333399", "0066cc", "0099cc", "66cccc",
    "77cc33", "669900", "336600", "666600", "999900", "cccc33",
    "ffff00", "ffcc33", "ff9900", "ff6600", "cc6633", "996633",
    "663300", "000000", "999999", "cccccc", "ffffff"]
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
    @like = Like.new
    @user = current_user
    @photo = Photo.find(params[:id])
    @like.user_id = @user.id
    @like.photo_id = @photo.id
    @like.save
    redirect_to :root
    # user = current_user
    # photo = Photo.find(params[:id])
    # user.like!(photo)
    # redirect_to :root
  end

  def color_search
    @photos = Photo.matching_color(params[:color])
    # render color_search partial
  end

	private
	def photo_params
		params.require(:photo).permit(:url, :user_id, :user, :image, :authenticity_token)
	end
end
