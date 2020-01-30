require 'pry'
require_relative 'user.rb'
require_relative 'tweet.rb'

coffee_dad = User.new("cofee_dad")
tea_dad = User.new("tea_dad")

tweet1 = Tweet.new("I Love Coffee!!", coffee_dad)
tweet2 = Tweet.new("I hate Coffee!!", tea_dad)
tweet3 = Tweet.new("I Love tea!!", tea_dad)


binding.pry
0