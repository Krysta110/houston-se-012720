Rails.application.routes.draw do
  resources :instructors#, only: [:show, :new, :edit, :index, :create, :update, :destroy]
  resources :students#, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
