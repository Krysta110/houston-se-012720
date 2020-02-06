class Dog < Animal
    # attr_reader :name
    # attr_accessor :mood
    
    # def initialize(name)
    #   @name = name
    #   @mood = 'nervous'
    # end

    # Create initialize method in Dog class to have breed attribute

    def initialize(name: , breed: )
        super(name: name)
        @breed = breed
    end
end