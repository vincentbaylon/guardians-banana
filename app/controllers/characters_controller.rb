class CharactersController < ApplicationController
  before_action :authorize, except: :index
  before_action :find_character, except: :index
  
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

  def find_character
    @character = Character.find(params[:id])
  end
end
