Book.destroy_all
Author.destroy_all
Driver.destroy_all
Passenger.destroy_all
Ride.destroy_all

d1 = Driver.create(name:"James")
d2 = Driver.create(name:"John")

p1 = Passenger.create(name: "Sania")
p2 = Passenger.create(name: "Jenn")
p3 = Passenger.create(name: "Ray")


Ride.create(passenger_id: p1.id, driver_id: d1.id, miles: 20)
Ride.create(passenger_id: p2.id, driver_id: d2.id, miles: 10)
Ride.create(passenger_id: p3.id, driver_id: d1.id, miles: 30)
Ride.create(passenger_id: p1.id, driver_id: d2.id, miles: 35)
Ride.create(passenger_id: p3.id, driver_id: d2.id, miles: 6)


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