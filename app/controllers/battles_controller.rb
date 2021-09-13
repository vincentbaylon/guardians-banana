class BattlesController < ApplicationController

  def create
    render json: Battle.create!(battle_params), status: :created
  end

  def update
    #Will call an instance method on the battle model
    #Will have 'logic' for what to call
    render json: @battle, status: :accepted
  end

  private

  def find_battle
    @battle = Battle.find(params[:id])
  end

  def battle_params
    params.permit(:player_character_id, :non_player_character_id)
  end
end
