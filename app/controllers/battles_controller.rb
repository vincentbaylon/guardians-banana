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
      @battle.attack(@battle.non_player_character, @battle.player_character, skill_id: params[:skill_id])
    else
      @battle.attack(@battle.player_character, @battle.non_player_character, skill_id: params[:skill_id] )
    end
    render json: @battle, status: :accepted
  end

  def destroy
    @battle.destroy
    @battle.player_character.update(current_hp: 100)
    @battle.non_player_character.update(current_hp: 100)
    head :no_content
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
    params.permit(:player_character_id, :non_player_character_id)
  end
end
