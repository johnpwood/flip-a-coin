import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//   }
//   getGreeting() {
//     return `My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `My name is ${this.name}`; 
//   }
// }

// const newSyntax = new NewSyntax();

// console.log(newSyntax);
// console.log(oldSyntax.getGreeting());
// console.log(newSyntax.getGreeting());

// const greet = oldSyntax.getGreeting;
// const newGreet = newSyntax.getGreeting;

// //console.log(greet());
// console.log(newGreet());
