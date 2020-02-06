require 'pry'

require_relative "animal.rb" 
require_relative "cat.rb" 
require_relative "dog.rb" 
require_relative "fish.rb" 

c1 = Cat.new(name: "Whisxers", age: 5)

d1 = Dog.new(name: "Richi", breed: "pug")

binding.pry
0
