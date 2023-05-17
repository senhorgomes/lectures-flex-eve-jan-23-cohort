let myObj = {
    name: 'JavaScript',
    compiled: false
};

const nameOfPerson = "Bob";
const starWars = "Luke";

const newObject = {
    nameOfPerson: nameOfPerson
}

// const newObj = {
//     name: name,
//     key: key
// }
const newObj = {
    //nameKey: nameKey
    nameOfAPerson: nameOfPerson,
    starWars,
}

console.log(newObj)

// These two approaches are equivalent! Property Shorthand
// const newObj = {name: name, compiled: compiled};
// const newObj = {name, compiled}; // If your var name and prop name are the same...
// Just use the var names and it fills in the key/value pairs.
// console.log('newObj (Property Shorthand!):', newObj);