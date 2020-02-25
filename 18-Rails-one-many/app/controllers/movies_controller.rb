class MoviesController < ApplicationController

    before_action :current_movie, only: [:show, :edit, :update, :destroy]

    def index
        @movies = Movie.all
        # @temp = "Hi!!!"
    end

    def show
        # byebug
        # @movie = Movie.find(params[:id])
    end

    def new
        @movie = Movie.new
    end

    def create
    # byebug
        movie = Movie.create(movies_params)
        # redirect_to "/movies/#{movie.id}"
        redirect_to movie_path(movie.id)

    end

    def edit
        # @movie = Movie.find(params[:id])
    end

    def update
    # byebug
        # movie = Movie.find(params[:id])
        @movie.update(movies_params)

        redirect_to "/movies/#{@movie.id}"
    end

    def destroy
        # byebug
        # movie = Movie.find(params[:id])
        @movie.destroy

        # redirect_to "/movies"
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
