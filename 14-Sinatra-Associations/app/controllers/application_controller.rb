class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        "Hello world"
    end

    get "/home" do
        erb :home
    end

    get '/books' do
        # binding.pry
        @books = Book.all
        # @temp = "Books"
        erb :index
    end

    get '/books/new' do
        erb :new
    end


    get '/books/:id' do 
        # binding.pry
        @book = Book.find(params[:id])
        erb :show
    end

    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    post '/books' do
        # binding.pry
        Book.create(params)
        redirect '/books'
    end

    patch '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])
        book.update(title: params[:title], year: params[:year])
        
        redirect "/books/#{book.id}"
    end

    delete '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])
        book.destroy
        # Book.delete(params[:id])
        redirect '/books'
    end

  
end
