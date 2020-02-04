require 'pry'

require_relative 'customer.rb'
require_relative 'account.rb'
require_relative 'bank.rb'

c1 = Customer.new("Mike")
c2 = Customer.new("Somaia")

b1 = Bank.new("Bofa")
b2 = Bank.new("Chase")

a1 = Account.new(c1, b2, 10000, "Savings")
a2 = Account.new(c1, b1, 9000, "checking")
a3 = Account.new(c1, b2, 4000, "checking")
a4 = Account.new(c2, b2, 6000, "Savings")
a5 = Account.new(c2, b1, 800, "checking")

binding.pry
0
