# - Bank.new() should create a new bank with a name

# - Bank#name should work

# - Bank.all should return all bank instances

# - Bank#accounts should return all account that belong to the bank

# - Bank#customers should return all of the Customers that are associated with the bank


class Bank
    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name

        @@all << self
    end

    def self.all
        @@all
    end

    def accounts
        Account.all.select {|account| account.bank == self}
    end

    def customers
        accounts.map {|account| account.customer}.uniq
    end
end