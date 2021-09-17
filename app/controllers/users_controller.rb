class UsersController < ApplicationController
  include ActionController::Cookies
  before_action :find_user, except: :create

  def create
    render json: User.create!(user_params), status: :created
  end

  def show
    render json: @user, include: [:character, :user_character]
  end

  def update
    @user.update!(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @user.destroy if @user.id == session[:user_id]
    head :no_content
  end

  private

  def find_user
    @user = User.find(session[:user_id])
  end

  def user_params
    params.permit(:username, :password, :id)
  end
end
