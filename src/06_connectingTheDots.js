/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

const myAccounts = [
    {
        id: 1,
        nameOfBank: "bankOfAmerica",
        ammount: 500
    },
    {
        id: 2,
        nameOfBank: "bankOfTirana",
        ammount: 1000
    },
    {
        id: 3,
        nameOfBank: "bankOfEngland",
        ammount: 69
    },
    {
        id: 4,
        nameOfBank: "bankOfHsbc",
        ammount: 100
    },
    {
        id: 1,
        nameOfBank: "bankOfItaly",
        ammount: 200
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.

for (const account of myAccounts) {
    console.log(`The bank: ${account.nameOfBank} and amount is : ${account.ammount}`)
}

// 3. Find a way to find out how much money you have in total.

let total = 0

for (const account of myAccounts) {
    total += account.ammount
}

console.log("total is :", total)

// 4. Find a way to add money to a selected account.
myAccounts[0].ammount = 150000

// 4.1 And subtract too.
myAccounts[1].ammount = 5

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.
for (const account of myAccounts) {
    account.serialNumber = Math.floor(Math.random()*90000) + 10000;
}

console.log("all my account are", myAccounts)