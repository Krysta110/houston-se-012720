class MoviesController < ApplicationController

    before_action :current_movie, only: [:show, :edit, :update, :destroy]

    def index
        @movies = Movie.all
    end

    def show
    end

    def new
        @movie = Movie.new
        @actors = Actor.all
    end

    def create
        # byebug
        movie = Movie.new(movies_params)
        # byebug
        if movie.valid?
            movie.save
            # redirect_to movie_path(movie)
            redirect_to movie
        else
            # byebug
            flash[:errors] = movie.errors.full_messages
            redirect_to new_movie_path
        end
    end

    def edit
        @actors = Actor.all
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
        params.require(:movie).permit(:title, :year, actor_ids: [])
    end

end
