start_number = 1
end_number = 100
current_number = start_number

is_prime = true

while current_number <= end_number

    while start_number < current_number

        if current_number % 2 == 0
            is_prime = false
        end

        if start_number != 1

            if current_number % start_number == 0

                is_prime = false

            end

        end

        start_number += 1

    end

    if is_prime == true
        puts current_number
    end

    is_prime = true

    start_number = 1

    current_number += 1
end