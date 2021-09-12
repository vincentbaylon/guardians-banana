class CharactersController < ApplicationController
  
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def find_characters
    @character = Character.find(params[:id])
  end
end
