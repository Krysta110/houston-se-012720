class ApplicationController < Sinatra::Base

    # set :views, "app/views"
    set :method_override, true

    get "/" do 
        "Hello world"
    end

    get "/home" do
        erb :home
    end
  
end
