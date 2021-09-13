class BattlesController < ApplicationController

  before_action :find_battle, except: :create

  def create
    render json: Battle.create!(battle_params), status: :created
  end

  def update
    @battle.turn.even? ? 
      @battle.attack(@battle.player_character, @battle.non_player_character) 
    : 
      @battle.attack(@battle.non_player_character, @battle.player_character)
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
