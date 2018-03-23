class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :note
      t.integer :userid
      t.belongs_to :schmo

      t.timestamps
    end
  end
end
