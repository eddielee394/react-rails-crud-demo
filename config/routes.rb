Rails.application.routes.draw do
  # update the to support dual namespacing in api routes
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end

  # set the index route
  root to: 'site#index'
end
