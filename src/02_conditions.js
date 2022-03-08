/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
function getShorterString(string1, string2) {

    if (typeof(string1) === "string" && typeof(string2) === "string") {

        const length1 = string1.length
        const length2 = string2.length
        
        if (length1 > length2) {
            return `Shorter length is : ${length2}`
        }

        else if (length1 < length2) {
            return `Shorter length is : ${length1}`
        }

        else {
            return "They are the same length!"
        }

    }

    else {
        console.log("Error, enter string next time for both dont troll")
    }

}

// 1.1 Call the function with "Bob" and "Steven" as arguments.
getShorterString("Bob", "Steven")

// 1.2. Call the function with "Henrica" and "Mark" as arguments.
getShorterString("Henrica", "Mark")

// 1.3. Call the function with any arguments we like to test the remaining use case.
getShorterString("1324", "achierhi")

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

// 2.1 Test all the scenarios by calling the function with different arguments.