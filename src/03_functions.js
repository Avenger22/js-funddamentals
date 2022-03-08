/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
function getMyName() {
    return "My name is Jurgen"
}

// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
function add(a, b) {
    return a + b
}

// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"
function subtractWithCheck(a, b) {

    if (typeof(a) === "number" && typeof(b) === "number") {
        return a - b
    }

    else {
        return "Yo dawg you can't subtract us!"
    }

}

// 4. now call the functions with some arguments of your choice.
add(55, 195)
subtractWithCheck(5, 15)

// 4.1 assign results to variables.
const result1 = add(55, 195)
const result2 = subtractWithCheck(5, 15)

// 4.2 print the results to the console.
console.log("Numbers add etc result:", result1, result2)

// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
function getAge(person) {

    if (typeof(person) === "object") {
        return `${person.name} is ${person.age} and born in : ${person.bornIn}`
    }

    else {
        return "undefined person, something wrong there, you entered a different thing"
    }

}

// 5.1 Call the function with a person argument of your choosing.
const myPerson = {
    id: 1,
    bornIn: "22/11/1995",
    name: "Jurgen"
}

getAge(myPerson)

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.

function greetingName(name) {
    return `Hi my friend: ${name}`
}

function getGreet(shouldCapitalise, name) {
    
    let nameChanged = name.toLowerCase()

    if (shouldCapitalise) {
        
        // let capitalizedLetter = nameChanged.charAt(0).toUpperCase()
        // nameChanged[0] = capitalizedLetter

        const finalName = nameChanged.charAt(0).toUpperCase() + nameChanged.slice(1);
        return greetingName(finalName)

    }

    else {
        return greetingName(name)
    }

}

const result = getGreet(true, "JURGEN")
console.log("get greet result", result)
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it