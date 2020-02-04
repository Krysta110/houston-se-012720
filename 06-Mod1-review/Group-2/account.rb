# - Account.new() should create a new account that takes an customer instance, bank instance, account_type and balance

# - Account#customer, Account#bank, Account#balance and Account#account_type

# - Account.all should return all account instances



class Account
    attr_accessor :customer, :bank, :balance, :account_type

    @@all = []

    def initialize(customer,bank,balance,account_type)
        @customer = customer
        @bank = bank
        @balance = balance
        @account_type = account_type

        @@all << self
    end

    def self.all
        @@all
    end
end