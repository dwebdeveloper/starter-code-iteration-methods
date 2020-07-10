// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes2)

const isTrue = users.filter(function (user) {//01
    return user.isActive === true
})
printKata(1, isTrue)

const emails = users.map(function (user) {//02
    return user.email
})
printKata(2, emails)

const companys = users.some(function (user) {//03
    if (user.company === "OVATION") {
        return user.company
    }
})
printKata(3, companys)

const ages = users.find(function (user) {//04
    if (user.age > 38) {
        return user.age
    }
})
printKata(4, ages)

//Find the first user in the array over the age of 38 who is active  05
/*const activeOne = {
    array: isTrue,
    answer: this.array.find(function (arrays) {
        if (arrays.age > 38) {
            return arrays.age
        }
    })
}*/

//const answer = isTrue

/*const answer = isTrue.find(function (user) {
    if (user.age > 38) {
        return user.age
    }
})*/
console.log(answer)
//const activeOne = answer.find(ages)

printKata(5, answer)
