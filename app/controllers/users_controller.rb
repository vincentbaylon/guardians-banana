class UsersController < ApplicationController

  before_action :authorize, :find_user, except: :create

  def create
    render json: User.create!(user_params), status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, include: [:character, :user_character]
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update
    @user.update(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @user.destroy if @user.id == session[:user_id]
    head :no_content
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
