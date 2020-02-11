Author.destroy_all
Book.destroy_all
Bakery.destroy_all
Customer.destroy_all
Review.destroy_all


a1 = Author.create(name: "vidhi", publication:"ruby", age: 26, address: "708 main st")
a2 = Author.create(name: "Mitchell", publication:"ruby", age: 29, address: "708 main st")
a3 = Author.create(name: "George", publication:"ruby", age: 26, address: "708 main st")

Book.create(title: "I Love Ruby", year: 2020, author_id: a1.id)
Book.create(title: "I Like Ruby", year: 2018, author_id: a2.id)

b1 = Bakery.create(name: "85 C")
b2 = Bakery.create(name: "6ping")

c1 = Customer.create(name: "Gian")
c2 = Customer.create(name: "Anam")

Review.create(bakery_id: b1.id, customer_id: c1.id, comment: "Nice")
Review.create(bakery_id: b2.id, customer_id: c1.id, comment:"Good")
Review.create(bakery_id: b2.id, customer_id: c2.id, comment:"Tasty")
Review.create(bakery_id: b1.id, customer_id: c2.id, comment: "Awwww")



response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")

books = JSON.parse(response)

books["items"].each do |book|
    if book["authors"]
        a = Author.create(name: book["authors"][0])
    else
        a = Author.create(name: "N/A")
    end
    Book.create(title: book["volumeInfo"]["title"], year: book["volumeInfo"]["publishedDate"], author_id: a.id )
end
binding.pry
0