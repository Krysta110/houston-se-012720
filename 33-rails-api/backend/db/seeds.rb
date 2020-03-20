# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Instructor.destroy_all
Student.destroy_all



i1 = Instructor.create(name: "Vidhi")
i2 = Instructor.create(name: "Raul")
i3 = Instructor.create(name: "Steven")

Student.create(name: "Paul", major: "SE", age: 25, instructor: i1 )
# Student.create(name: "Paul", major: "SE", age: 25, instructor_id: i1.id )

Student.create(name: "Stephen", major: "SE", age: 25, instructor: i2 )
Student.create(name: "Blake", major: "SE", age: 25, instructor: i3 )
Student.create(name: "Cornelius", major: "SE", age: 25, instructor: i1 )
Student.create(name: "Mitchell", major: "SE", age: 25, instructor: i2 )
Student.create(name: "Anam", major: "SE", age: 25, instructor: i3 )

