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
    }
}

module.exports = StringCalculator;