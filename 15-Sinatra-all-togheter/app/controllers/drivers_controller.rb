class DriversController < ApplicationController
    set :views, 'app/views/drivers'

    #display all drivers
    get '/drivers' do
        @drivers = Driver.all
        erb :index
    end

    #display single driver
    get '/drivers/:id' do
        @driver = current_driver
        erb :show
    end

    #find a driver
    def current_driver
        Driver.find(params[:id])
    end
end