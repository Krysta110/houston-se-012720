Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :movies, only: [:index, :show]
  # To display all the movies
  get '/movies', to: 'movies#index'

  # To display single movie's info
  get '/movies/:id', to: 'movies#show'
end
