class BattlesController < ApplicationController

  before_action :find_battle,  except: :create

  def create
    render json: Battle.create(battle_params), status: :created
  end

  def update
    puts @battle
    #pass in battle_params as the args for the attack method
    # new battle_params will include skill_name and skill_effect
    if @battle.turn.even?
      @battle.attack(@battle.player_character, @battle.non_player_character)
    else
      @battle.attack(@battle.non_player_character, @battle.player_character)
    end
    render json: @battle, status: :accepted
  end

  private

  def find_battle
    @battle = Battle.find(params[:id])
  end

  # def combatants
  #   @player = @battle.player_character
  #   @enemy = @battle.non_player_character
  # end


  def battle_params
    #add skill name and skill effect as params?
    params.permit(:player_character_id, :non_player_character_id)
  end
end
