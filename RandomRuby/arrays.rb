sharks = ["wobbegong", "great white", "hammerhead", "nurse"]

puts sharks[2]
sharks[2] = "bull"

sharks.shift
puts sharks

puts ""
sharks.push("leopard")
puts sharks

puts ""
sharks << "leopard"
puts sharks

puts ""
if !(sharks.include?("wtetwtwet"))
    puts "That shark doesn't exist"
end

puts ""
puts "Random: " + sharks.sample

puts ""
puts sharks.sort_by { |shark| shark.length }

puts ""
sharks.sort!
puts sharks
