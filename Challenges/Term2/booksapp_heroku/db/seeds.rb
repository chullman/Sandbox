# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.create([
  { name: 'J.K. Rowling', image_url: 'jkrowling.png' },
  { name: 'George R. R. Martin', image_url: 'georgerrmartin.jpg' }
])

Book.create([
  { title: 'Harry Potter and the Philosophers Stone', image_url: 'philosophersstone.jpg', author_id: 1 },
  { title: 'Harry Potter and the Chamber of Secrets', image_url: 'chamberofsecrets.jpg', author_id: 1 },
  { title: 'Harry Potter and the Prisoner of Azkaban', image_url: 'prisonerofazkaban.jpg', author_id: 1 },
  { title: 'A Game of Thrones', image_url: "gameofthrones.jpg", author_id: 2 },
  { title: 'A Clash of Kings', image_url: "aclashofkings.jpg", author_id: 2 },
  { title: 'A Storm of Swords', image_url: "astormofswords.jpg", author_id: 2 }
])