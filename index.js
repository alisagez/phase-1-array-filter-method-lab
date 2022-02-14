// Code your solution here

//toLowerCase is added to pass the test that asks for a return of matching drivers if case does not match, but letters do

//this is the full findMatch function. it is rewritten below as an arrow function
// function findMatching(drivers, name) {
//     let resultMatch = drivers.filter(function(driver){
//     return driver.toLowerCase() === name.toLowerCase()})
//     return resultMatch
// }

function findMatching(drivers, name) {
    let resultMatch = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return resultMatch
}


function fuzzyMatch(drivers, firstCharacters) {
    let resultMatch = drivers.filter(driver => driver.startsWith(firstCharacters))
    return resultMatch
}

function matchName(drivers, enteredCharacters) {
    let resultMatch = drivers.filter(driver => driver.name === enteredCharacters)
    return resultMatch
}