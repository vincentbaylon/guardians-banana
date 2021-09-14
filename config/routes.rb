Rails.application.routes.draw do

  resources :users, only: [ :create, :show, :update, :destroy ]
  resources :characters, only: [ :index, :show, :create, :update, :destroy]
  resources :battles, only: [ :create, :update ]
  resources :user_characters, only: [ :create, :destroy ]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/high_scores', to: 'high_scores#index'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
