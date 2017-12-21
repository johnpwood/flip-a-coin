class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year${this.age === 1 ? '' : 's'} old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    return super.getDescription() + this.hasMajor() ? `  He has the major ${this.major}.` : '';
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    return super.getGreeting() + (this.homeLocation ?
                                `.  I'm from ${this.homeLocation}` : '');
  }
}
const me = new Student('Andrew Mead', 26, 'Computer Science');
const other = new Traveler('Jim', 1);
const nobody = new Student();
const rambler = new Traveler('Joe', 22, 'Dallas');

console.log(me.getGreeting());
console.log(me.getDescription());
console.log(nobody.getDescription());
console.log(nobody.getGreeting());
console.log(me.getDescription());
console.log(rambler.getGreeting());
console.log(other.getGreeting());
