Rails.application.routes.draw do

  # point to our extended devise registration controller
  devise_for :users, :controllers => { registrations: 'registrations' }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts do
    resources :comments
  end

  root "posts#index"
end
