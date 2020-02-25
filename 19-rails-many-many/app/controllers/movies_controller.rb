class MoviesController < ApplicationController

    before_action :current_movie, only: [:show, :edit, :update, :destroy]

    def index
        @movies = Movie.all
    end

    def show
    end

    def new
        @movie = Movie.new
    end

    def create
        movie = Movie.create(movies_params)
        redirect_to movie_path(movie.id)
    end

    def edit
        
    end

    def update
        @movie.update(movies_params)
        redirect_to "/movies/#{@movie.id}"
    end

    def destroy
        @movie.destroy
        redirect_to movies_path
    end

    def current_movie
        @movie = Movie.find(params[:id])
    end

    private

    def movies_params
        params.require(:movie).permit(:title, :year)
    end

end
