class HighScoresController < ApplicationController
  
  before_action :find_score, except: :index
  before_action :authorize, except: [ :index, :show ]

  def index
    render json: HighScore.all, include: :user, status: :ok
  end

  def show
    render json: @high_score, status: :ok
  end

  def create
    render json: HighScore.create(high_score_params), status: :created
  end

  private

  def find_score
    @high_score = HighScore.find_by(user_id: params[:user_id])
  end

  def high_score_params
    params.permit(:user_id, :score)
  end
end
