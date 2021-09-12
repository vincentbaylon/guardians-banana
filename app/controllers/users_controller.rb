class UsersController < ApplicationController

  before_action :find_user, except: :create

  def create
    user = User.create!(user_params)
    render json: user, status: :created if user.valid?
  end

  def show
    render json: @user, status: :ok
  end

  def update
    @user.update(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @user.destroy
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
