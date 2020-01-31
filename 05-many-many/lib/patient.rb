class Patient
    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name

        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select {|appointment| appointment.patient == self}

        # Appointment.all.select {|appointment| appointment.doctor == self } common mistake

    end

    def doctors
        appointments.map {|appointment| appointment.doctor}.uniq
    end
    
end