class StringCalculator{
    // Method to add numbers from a string
    add(numbers){
        // input string is empty
        if(numbers === "")
            return 0;

        // default delimiters
        let delimeters = [',', '\n'];

        // checking for custom delimiters
        if(numbers.startsWith('//')){
            // finding the end of the delimeter declaration line
            // as there can be more than one delimeter in the input.
            const delimeterEndIndex = numbers.indexOf('\n');
            
            // extracting the delimeter declaration part
            const delimeterPart = numbers.substring(2, delimeterEndIndex);

            // handling multiple delimeters enclosed in square brackets
            const bracketedDelimeters = delimeterPart.match(/\[.*?\]/g);
            if(bracketedDelimeters){
                bracketedDelimeters.forEach(delimeter => {
                    // removing the square brackets
                    delimeters.push(escapeRegExp(delimeter.slice(1, -1)));
                });
            }else{
                // handling single or multiple delimeters without square brackets
                for(let i=0; i<delimeterPart.length; i++){
                    delimeters.push(escapeRegExp(delimeterPart[i]));
                }
            }

            // updating the input to exclude the delimeter part
            numbers = numbers.substring(delimeterEndIndex + 1);
        }

        // creating a regex pattern to split the numbers by any of the delimeters
        const delimeterPattern = new RegExp(`[${delimeters.join('')}]`);

        // splitting the numbers into an array of number strings
        const numbersArray = numbers.split(delimeterPattern);
        
        // array to store any negative numbers if present
        const negativeNumbers = [];

        // initializing the sum of numbers
        let sum = 0;

        // processing each number string in the array
        numbersArray.forEach(numStr => {
            // converting the string to an integer
            const number = parseInt(numStr, 10);

            // skipping the non-numeric values
            if(isNaN(number))
                return;

            // collecting the negative numbers
            if(number < 0){
                negativeNumbers.push(number);
            }else{
                // add the positive number to the sum if less than or equal to 1000
                if(number <= 1000)
                   sum += number;
            }
        });

        // throwing an error if negative numbers are found
        if(negativeNumbers.length > 0){
            throw new Error('Negative numbers are not allowed: ' + negativeNumbers.join(', '));
        }

        // return the calculated sum
        return sum;
    }
}

// utility function to escape special characters in delimeters
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = StringCalculator;
