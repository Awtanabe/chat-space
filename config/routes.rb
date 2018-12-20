Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  # post '/users' => "users#create"

  resources :users, only: [:index, :edit, :create, :update] do
    collection do
     get :search
    end
  end
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
