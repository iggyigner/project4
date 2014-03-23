Project4::Application.routes.draw do
  root 'photos#index'

  get 'photos' => 'photos#index', :as => :photos
  get 'photos/new' => 'photos#new', :as => :new_photo
  post 'photos' => 'photos#create'
  get 'photos/:id' => 'photos#show', :as => :photo
  delete 'photos/:id' => 'photos#destroy'
  get 'photos/like/:id' => 'photos#like', :as => :like_photo
  
  resources :users
  get 'auths/new' => 'auths#new', :as => :new_auth
  post 'auths' => 'auths#create'
  delete 'auths' => 'auths#destroy'

  resources :favorites



  # get "welcome/index"
  # get 'users' => 'users#index', :as => :users

  # get "auths/new"
  # get "auths/create"
  # get "auths/destroy"
  # get "users/index" => 'users#index', :as => :users
  # get "users/new" => 'users#new', :as => :new_user 
  # post "users/create" => 'users#create', :as => :users_create_path
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
