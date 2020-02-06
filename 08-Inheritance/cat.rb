class Cat < Animal
    # attr_reader :name
    # attr_accessor :mood
    
    # def initialize(name)
    #   @name = name
    #   @mood = 'nervous'
    # end
    
    attr_accessor :age

    def initialize(name: ,age: )
        super(name: name)
        @age = age
    end

    def say_hi
        super
        p "I am saying hi to a cat!"
        0
    end
end