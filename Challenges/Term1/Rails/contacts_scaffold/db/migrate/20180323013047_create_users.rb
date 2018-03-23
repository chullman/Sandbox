class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :address
      t.text :phone
      t.text :email
      t.decimal :balance

      t.timestamps
    end
  end
end
