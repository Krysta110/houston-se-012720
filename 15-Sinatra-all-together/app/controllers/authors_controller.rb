class AuthorsController < ApplicationController
    set :views, "app/views/authors"

    #Displaying list of all the authors
    get '/authors' do
        @authors = Author.all
        erb :index
    end

    #form for creating a new author
    get '/authors/new' do
        erb :new
    end

    #Show page for single author
    get '/authors/:id' do 
        @author = current_author
        erb :show
    end

    #form for editing an existing author
    get '/authors/:id/edit' do
        @author = current_author
        erb :edit
    end

    #create an author
    post '/authors' do
        author = Author.create(params)
        redirect "/authors/#{author.id}"
    end

    #updating an author
    patch '/authors/:id' do
        author = current_author
        author.update(name: params[:name])
        
        redirect "/authors/#{author.id}"
    end

    #Delete an author
    delete '/authors/:id' do
        author = current_author
        author.destroy
        redirect '/authors'
    end

    def current_author
        Author.find(params[:id])
    end

end