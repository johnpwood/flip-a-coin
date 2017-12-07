

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
//let nameLet = 'Julie';
console.log('nameLet: ', nameLet);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

var fullName = 'Andrew Mead';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
    const lastName = fullName.split(' ')[1];
    console.log(lastName);
}

console.log(firstName);
console.log(lastName);
