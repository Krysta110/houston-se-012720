class BooksController < ApplicationController

    set :views, "app/views/books"

    get '/books' do
        # binding.pry
        @books = Book.all
        # @temp = "Books"
        # erb :'books/index'
        erb :index
    end

    get '/books/new' do
        @authors = Author.all
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
        book = Book.new(params[:book])

        if !params[:author][:name].empty?
            new_author = Author.create(params[:author])
            #book.update(author_id: new_author.id)
            book.author = new_author
        end

        # unless params[:author][:name].empty?
        #     new_author = Author.create(params[:author])
        #     #book.update(author_id: new_author.id)
        #     book.author = new_author
        # end

        book.save
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