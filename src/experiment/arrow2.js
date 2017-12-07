// with arrow functions, arguments object is not bound

const add = (a, b) => {
    return a + b;
};

console.log(add(44, 1, 101));

const user = {
    name: 'Andy',
    cities:['New York', 'Dallas', 'Fayetteville'],
    printPlacesLived(){
	console.log(this.cities);
	this.cities.forEach(city => {
	    console.log(this.name + ' has lived in ' + city);
	})
    },
    factorial: n => n===1?1:n*factorial(n-1)
};

function factorial(n){
    return n===1?1:n*factorial(n-1);
}

var fac = n=>n===1?1:n*fac(n-1);

var fact = function(n){return n===1?1:n*fact(n-1);};

user.printPlacesLived();
console.log(user.factorial(5));
console.log(factorial(5));
console.log(fac(5));
console.log(fact(5));

// challenge area

const multiplier = {
    numbers: [4, 2, 1, 2],
    multiplyBy: 3,
    multiply(){
	return this.numbers.map(x => this.multiplyBy * x);
    }
}

console.log(multiplier.multiply());
