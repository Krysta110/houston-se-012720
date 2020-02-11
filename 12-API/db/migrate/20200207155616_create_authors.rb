class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :publication
      t.integer :age
      t.string :address

      # t.name :string commom mistake
    end
  end
end
