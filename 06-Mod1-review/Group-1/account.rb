# - Account.new() should create a new account that takes an customer instance, bank instance, account_type and balance

# - Account#customer, Account#bank, Account#balance and Account#account_type

# - Account.all should return all account instances


class Account
    attr_reader :customer, :bank, :account_type
    attr_accessor :balance

    @@all = []

    def initialize(customer, bank, account_type, balance)
        @customer = customer
        @bank = bank
        @account_type = account_type
        @balance = balance

        @@all << self
    end

    def self.all
        @@all
    end
end