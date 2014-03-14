class AuthsController < ApplicationController
	def new
		if current_user
			redirect_to :root
		else
			@user = User.new
		end
	end

	def create
		user = User.find_by(email: params[:user][:email]) #:user represents the @user from the 'new' action.  It is saying, take the params from the @user form, then its username.
		if user.authenticated?(params[:user][:password])
			session[:user_id] = user.id
			redirect_to :root
		else
			render action "new"
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to :root
	end
end
