Book.destroy_all
Author.destroy_all

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")

books = JSON.parse(response)

# books["items"].each do |book|
#     Book.create(title: book["volumeInfo"]["title"], year: book["volumeInfo"]["publishedDate"])
# end

books["items"].each do |book|
    if book["authors"]
        a = Author.create(name: book["authors"][0])
    else
        a = Author.create(name: "N/A")
    end
    Book.create(title: book["volumeInfo"]["title"], year: book["volumeInfo"]["publishedDate"], author_id: a.id )
end