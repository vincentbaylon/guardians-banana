class UserCharactersController < ApplicationController
    before_action :find_user_char, except: :create

    def create
        render json: UserCharacter.create!(user_char_params), status: :created
    end
  
    def destroy
        @user_char.destroy
        head :no_content
    end

    private
  
    def find_user_char
        @user_char = UserCharacter.find_by(user_id: params[:user_id])
    end
  
    def user_char_params
        params.permit(:user_id, :character_id)
    end
end
