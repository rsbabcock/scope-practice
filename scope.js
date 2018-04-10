
// const userWord = "The lazy bird"

// function containsVowels (wordParameter)
// {  // Beginning of `function` scope

//     /*
//         The `doesItHaveOne` variable can only be accessed
//         within the curly braces of this function. The match()
//         method on a string will return `null` if there
//         are no matches, otherwise, an array will be returned.
//     */
//     const doesItHaveOne = wordParameter.match(/aeiou/gi)

//     return doesItHaveOne === null

// }  // End of `function` scope

// const itContainedVowels = containsVowels(userWord)

// console.log(itContainedVowels) // true or false
// console.log(doesItHaveOne) // doesItHaveOne is undefined

// C is for cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// conjunction function
const conjunction = function (firstWord, secondWord) {
    return `${firstWord} ${secondWord}`
}

console.log(conjunction("Master", "Card"))

// Mod Squad - stuck

const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

let HTMLRepresentation = `<h1>The Mod Squad</h1>`
ModSquad.members.forEach(member => {
            HTMLRepresentation += `<div>${member}</div>`
            document.querySelector(".show-info").innerHTML = HTMLRepresentation
        })
    
// Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    if (currentLocation[1] > 2) {
       console.log("This location is invalid")
    }
}

console.log(`There were ${locations.length} locations displayed`)

// Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = possibleNames[Math.floor(Math.random() * 7)]
    return  `${randomizer} the Llama`
    }

nameMaker = llamaNamer()
console.log(nameMaker)