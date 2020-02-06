class Animal

    attr_reader :name
    attr_accessor :mood
    
    def initialize(name:)
      @name = name
      @mood = 'nervous'
    end
    
    def say_hi
        p "I am saying hi to an animal!"
    end
  
end
  