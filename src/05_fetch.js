/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.

let arrayInitial = []
let arrayFinal = []

async function getNamesOfNicosRepos(arrayInitial) {

    try {
        const response = await fetch(NicosRepositories).then(response => response.json())
        console.log(response)
        arrayInitial = [...response]
        console.log(arrayInitial)
    }

    catch(err) {
        console.log(err)
    }

}

getNamesOfNicosRepos(arrayInitial)
console.log(arrayInitial)

for (const element of arrayInitial) {

    arrayFinal = [...arrayFinal, element.name]
    // console.log(element.name)
    // console.log(element)

}

console.log(arrayFinal)

// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.

// A post is: {
//   id: number,
//   title: string,
//   text: string
// }

// {
//     "posts": [
//         {
//             id: 1,
//             title: "Lol",
//             text: "ejeoeo"
//         },
//         {
//             id: 2,
//             title: "ww",
//             text: "ejeoeoeee"
//         }
//     ]
// }

// npx json-server --watch db.json --port 5000


// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);

function createPost(post) {

    fetch(NicosRepositories, {
        
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(post)

    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err=>console.log(err))

}

const post = {
    id: 55,
    name: "jurgen",
    surname: "dont know",
    age:45
}

// createPost(post)