class UsersController < ApplicationController

  def create
    render json: { message: "This is a create action" }, status: :created
  end

  def show
    render json: { message: "This is a show action" }, status: :ok
  end

  def update
    render json: { message: "This is an update action" }, status: :accepted
  end

  def destroy
    render json: { message: "This is a destroy action" }, status: :accepted
  end
end
