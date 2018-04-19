Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/recipes'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/pages/home', to: 'pages#home'
  get '/pages/recipes', to: 'pages#recipes'

end
