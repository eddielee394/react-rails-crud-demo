# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
10.times { Item.create!(name: "Item", description: "I am a description.") }
#   Character.create(name: 'Luke', movie: movies.first)
