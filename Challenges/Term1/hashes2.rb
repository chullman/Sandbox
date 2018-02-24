menu = {
  quarter_pounder: {
    energy: '2,200KJ',
    sugars: '10g',
    price: 5.50,
    profit_per_sale: 3.50,
    sold_today: 89
  },
  big_mac: {
    energy: '2,060KJ',
    sugars: '4g',
    price: 6,
    profit_per_sale: 4,
    sold_today: 183
  }
}

# A quarter_pounder was just sold. Update the hash.

(menu[:quarter_pounder])[:sold_today] += 1

# Add a sundae to the menu.

menu[:sundae] = { energy: '2,060KJ', sugars: '2g', price: 3, profit_per_sale: 5, sold_today: 63 }

# Create a report for the manager showing each item,
# total sold today and total profit today.
 
menu.each_key do |key|
  puts "Item: #{key}"
  puts "Sold today: #{(menu[key])[:sold_today]}"
  puts "Total profit: $#{(menu[key])[:profit_per_sale] * (menu[key])[:sold_today]}"
  puts ""
end