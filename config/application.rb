require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Project4
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Defaults for our Paperclip images
    config.paperclip_defaults = { 
      storage: :fog,
      fog_credentials: {
        provider: "Google",
        google_storage_access_key_id: ENV['GSTORAGE_ACCESS_KEY_ID'], #whenever see ENV and [], replaces with what's in your application.yml file
        google_storage_secret_access_key: ENV['GSTORAGE_SECRET_ACCESS_KEY']
      },
      fog_public: true,
      fog_host: ENV['GSTORAGE_HOST'],
      fog_directory: ENV['GSTORAGE_BUCKET'],
      path: ':class/:attachment/:id/:style/:filename' #:class is user/:attachment/:id is id of photo/:style is dimensiosn we spec'd/:filename
    }
  end
end
