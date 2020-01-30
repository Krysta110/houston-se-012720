require 'pry'

class User

    attr_reader :username

    @@all = []

    def initialize(name)
        @username = name

        @@all << self
    end

    def self.all
        @@all
    end

    # User#tweets that returns an array of Tweet instances

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end


end
