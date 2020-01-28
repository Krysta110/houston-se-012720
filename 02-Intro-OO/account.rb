require 'pry'

class Account

    attr_reader :balance
    # attr_writer :owner
    attr_accessor :owner

    def initialize(owner: name, balance: amount)
        # puts owner
        # puts balance
        @owner = owner
        @balance = balance
    end

    # def initialize(name,amount) Make sure you remember the order
    #     @owner = name
    #     @balance = amount
    # end

    # def owner=(name)
    #     @owner = name
    # end

    # def owner
    #     @owner
    # end

    # def balance=(amount)
    #     @balance = amount
    # end

    # def balance
    #     @balance
    # end

end

a1 = Account.new(owner: "Vien", balance: 10000)
binding.pry
0