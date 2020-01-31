require 'pry'
require 'require_all'

require_all 'lib'
# require_relative 'lib/doctor.rb'
# require_relative 'lib/patient.rb'
# require_relative 'lib/appointment.rb'


d1 = Doctor.new("Dr. William")
d2 = Doctor.new("Dr. Bill")
d3 = Doctor.new("Dr. Jeannifer")

p1 = Patient.new("John")
p2 = Patient.new("Gian")
p3 = Patient.new("Ria")
p4 = Patient.new("Nia")
p5 = Patient.new("Sia")

a1 = Appointment.new(d1, p2, "12:30pm")
a2 = Appointment.new(d1, p1, "2:30pm")
a3 = Appointment.new(d2, p2, "12:30pm")
a4 = Appointment.new(d2, p3, "2:30pm")
a5 = Appointment.new(d3, p4, "1:30pm")
a6 = Appointment.new(d3, p1, "12:30pm")
a7 = Appointment.new(d3, p2, "2:30pm")
a8 = Appointment.new(d3, p4, "11:30am")


binding.pry
0
