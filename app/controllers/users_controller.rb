class UsersController < ApplicationController
  def index
  	@users = User.all
  end

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(params.require(:user).permit(:email, :password))
		if @user.save
			redirect_to :root
		else
			render action: "index"
		end
	end

  def show
    @user = User.find(params[:id])
    @photos = @user.photos.all
  end

  def show_likes
    @user = User.find(params[:id])
    @likes = @user.likes.includes(:photo)
    @photos = @user.photos.all
  end
end
