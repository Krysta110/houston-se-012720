require 'pry'
require 'sqlite3'


db = SQLite3::Database.new("chinook.db")

p "write name"
name = gets.chomp
p "id"
id = gets.chomp
puts name 
puts id


db.execute("UPDATE fans_new SET name = ? WHERE id = ?", name, id)


binding.pry
0