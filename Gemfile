source 'https://rubygems.org'
ruby '2.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.3'


gem 'httparty', '0.13.0' #requires .parse in controller, hash 'Party Hard message'

# Bookmarklet gem
gem "rails-bookmarklet", :git => "https://github.com/oliverfriedmann/rails-bookmarklet.git"

# For user authentication
gem 'bcrypt', github: 'codahale/bcrypt-ruby'

# Include Paperclip gem
gem "paperclip", "~> 4.1"
#Enable Google Cloud storage
gem "fog"

# Hides all private credentials by placing these secret keys into ignored file in .gitignore
gem "figaro"

# Use postgresql as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'
gem 'foundation-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
#for deployment
gem 'rails_12factor', group: :production


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development, :test do
	gem 'pry'
end

group :development do
  gem 'kaleidoscope', github: 'joshsmith/kaleidoscope'
end

group :production do
  gem 'kaleidoscope', github: 'joshsmith/kaleidoscope'
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
