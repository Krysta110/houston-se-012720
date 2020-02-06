class Animal

    attr_reader :name
    attr_accessor :mood

    @@all = []
    
    def initialize(name:)
      @name = name
      @mood = 'nervous'

      @@all << self
    end
    
    def say_hi
        p "I am saying hi to an animal!"
    end

    def self.all
        @@all
    end
  
end
  