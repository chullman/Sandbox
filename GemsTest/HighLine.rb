require 'rubygems'
require 'bundler/setup'

# require your gems as usual
require 'highline/import'

#password = ask ("Please enter your password: "){ |q| q.echo = "*" }

#company = ask("Company?  ") { |q| q.default = "none" }

=begin
choose do |menu|
    menu.prompt = "Please choose your favorite programming language?  "
  
    menu.choice(:ruby) { say("Good choice!") }
    menu.choices(:python, :perl) { say("Not from around here, are you?") }
  end
=end

say("This should be <%= color('bold', BOLD) %>!")

  