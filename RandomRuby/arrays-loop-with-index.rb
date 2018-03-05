subscribers = [
  "a@hotmail.com",
  "b@gmail.com",
  "c@facebook.com"
]

subscribers.each_with_index do |email, index|
  if email.include?("facebook")
    subscribers[index] += "*"
  end
end
puts subscribers