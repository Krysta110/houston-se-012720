class Doctor
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
        Appointment.all.select {|appointment| appointment.doctor == self }
    end

    def patients
        # app = Appointment.all.select {|appointment| appointment.doctor == self}

        appointments.map {|appointment| appointment.patient }.uniq # calling another instance method on the same instance
    end
    
end