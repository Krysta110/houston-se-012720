Author.destroy_all


Author.create(name: "vidhi", publication:"ruby", age: 26, address: "708 main st")
Author.create(name: "Mitchell", publication:"ruby", age: 29, address: "708 main st")
Author.create(name: "George", publication:"ruby", age: 26, address: "708 main st")

puts Author.all