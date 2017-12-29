import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   )
// }

// ReactDOM.render((
//   <Layout>
//     <h1>This is my Page.</h1>
//     <p>This is a paragraph.</p>
//   </Layout>
// ), document.getElementById('app')
// );


// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.content}
//       <p>footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page.</p>
//   </div>
// );

// ReactDOM.render(<Layout content={template} />, document.getElementById('app'));

//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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
