Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :movies, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  # To display all the movies
  # get '/movies', to: 'movies#index'

  # # # To give new movie form
  # get '/movies/new', to: 'movies#new'

  # # # To display single movie's info
  # get '/movies/:id', to: 'movies#show'

  # # #create new movie
  # post '/movies', to: 'movies#create'

  # # # form to edit an existing movie
  # get '/movies/:id/edit', to: 'movies#edit'

  # # # updating an existing movie
  # patch '/movies/:id', to: 'movies#update'

 
end
