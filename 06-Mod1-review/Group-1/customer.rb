
# - Customer.new() should create a new customer with a name

# - Customer#name should work

# - Customer.all should return all customer instances

# - Customer#accounts should return all account that belong to the customer

# - Customer#banks should return all banks that are associated with the customer



class Customer
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
        Account.all.select {|account| account.customer == self}
    end

    def banks
        accounts.map {|account| account.bank}.uniq
    end

    # - Customer#balance should return total balance from all the accounts from all the bank that are associated with the customer

    def balance
        # accounts.sum {|account| account.balance}
        total = 0
        accounts.each {|account| total += account.balance}
        total
    end

end