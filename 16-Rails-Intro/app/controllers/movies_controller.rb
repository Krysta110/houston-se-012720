class MoviesController < ApplicationController

    def index
        @movies = Movie.all
        # @temp = "Hi!!!"
    end

    def show
        # byebug
        @movie = Movie.find(params[:id])
    end

end
