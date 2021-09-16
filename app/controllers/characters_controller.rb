class CharactersController < ApplicationController
  # before_action :authorize, except: :index
  before_action :find_character, except: [:index, :enemy]
  
  def index
    render json: Character.all, status: :ok
  end

  def show
    render json: @character, status: :ok
  end

  def create
    render json: Characte.create!(character_params), status: :created 
  end

  def update
    @character.update(character_params)
    render json: @character, status: :accepted
  end

  def destroy
    @character.destroy
    head :no_content
  end

  def enemy
    render json: Character.all.sample, status: :ok 
  end


  private

  def find_character
    @character = Character.find(params[:id])
  end

  def character_params
    params.permit(:character_name, :klass_id, :is_hero, :max_hp, :user_id)
  end
end
