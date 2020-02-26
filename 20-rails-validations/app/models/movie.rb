class Movie < ApplicationRecord
    has_many :characters
    has_many :actors, through: :characters

    validates :title, presence: true, format: { with: /\A[0-9a-zA-Z]+\z/ }
    # Validates year for a movie => less than 2021 and greater than 1900
    validates :year, numericality: {only_integer: true, greater_than: 1900, less_than: 2021}
end
