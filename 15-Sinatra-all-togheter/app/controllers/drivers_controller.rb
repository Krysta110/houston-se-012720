class DriversController < ApplicationController
    set :views, 'app/views/drivers'

    #display all drivers
    get '/drivers' do
        @drivers = Driver.all
        erb :index
    end

    #form to create new driver
    get '/drivers/new' do
        @rides = Ride.all
        @passengers = Passenger.all
        erb :new
    end

    #display single driver
    get '/drivers/:id' do
        @driver = current_driver
        erb :show
    end

    #create a driver
    post '/drivers' do
        # binding.pry
        driver = Driver.create(params[:driver])

        if params[:rides] && params[:rides].length > 0 
            # binding.pry
            params[:rides].each do |id|
                r = Ride.find(id)
                r.update(driver_id: driver.id)
            end
        end

        if params[:passengers] && params[:passengers].length > 0
            params[:miles].delete("")

            i = 0

            while i < params[:passengers].length do
                Ride.create(driver_id: driver.id, passenger_id: params[:passengers][i], miles: params[:miles][i])

                i += 1
            end
        end


        redirect "/drivers/#{driver.id}"
    end

    #find a driver
    def current_driver
        Driver.find(params[:id])
    end
end