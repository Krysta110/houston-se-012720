require 'pry'

class Account

    attr_reader :balance
    attr_accessor :owner

    @@all = []

    def initialize(owner: name, balance: amount)
        @owner = owner
        @balance = balance

        @@all << self
        # puts self
    end

    def message
        puts self
        puts "Hi! This account belongs to #{self.owner}"
        # puts "Hi! This account belongs to #{owner}"

        # puts "Hi! This account belongs to #{@owner}"

    end

    def self.message
        puts "Hi! I am an Account class!!!!"
    end

    # Create an instance method that deduct 200 from balance

    def deduct
        # @balance = @balance - 200
        @balance -= 200
        # puts @@all
        puts Account.all
    end

    def self.all
        @@all
    end

    # Create a class method which puts “Hi I am from class method!”

    def self.Hi
        puts "Hi I am from #{self} method!"
    end


end

a1 = Account.new(owner: "Vien", balance: 10000)
a2 = Account.new(owner: "Cornelius", balance: 10000)
a3 = Account.new(owner: "Caleb", balance: 10000)
a4 = Account.new(owner: "Gian", balance: 10000)


binding.pry
0