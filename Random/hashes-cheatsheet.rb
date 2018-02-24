# Create a hash
scott = {
  name: 'Scott Dixon',
  location: 'Gold Coast',
  hobbies: ['Surfing', 'Meditation']
}

# Look up a value
puts scott[:location]

# Update a value
scott[:location] = "Brisbane"

# Add a key/value pair
scott[:star_sign] = "Capricorn"

# Delete a key/value pair
scott.delete(:location)

# Pull out the array from the hash
puts scott[:hobbies]

# Delete something from the array
scott[:hobbies].pop

# Loop/iterate an array
scott.each do |key, value|
  puts "Key: #{key}, Value: #{value}"
end