students = Array.new
#students = []
students.push("Chris")

loop do
    # Ask user for new student
    puts "Enter the new student's name:"
    new_student = gets.chomp

    if new_student.to_s.downcase == "exit"
        break
    end

    # Push the student to the array
    students.push(new_student.capitalize)

    # Show the array back to the user
    puts ""
    puts "Students are:"
    puts students.sort!
    puts ""
end