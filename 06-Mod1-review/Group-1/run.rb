require 'pry'

require_relative "customer.rb"
require_relative "bank.rb"
require_relative "account.rb"


c1 = Customer.new("Gian")
c2 = Customer.new("Mike")
c3 = Customer.new("Tina")

b1 = Bank.new("first bank")
b2 = Bank.new("capital bank")
b3 = Bank.new("Chase")

a1 = Account.new(c2,b3,"Savings",10000)
a2 = Account.new(c1,b2,"Checking",9000)
a3 = Account.new(c3,b1,"Savings",1800)
a4 = Account.new(c2,b3,"Checking",8000)
a5 = Account.new(c1,b2,"Savings",600)

binding.pry
0
