class CreateSchmos < ActiveRecord::Migration[5.1]
  def change
    create_table :schmos do |t|
      t.string :name
      t.string :address
      t.string :ph
      t.string :email
      t.decimal :balance

      t.timestamps
    end
  end
end
