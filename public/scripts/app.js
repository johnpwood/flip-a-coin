console.log('App.js is running!');

var template = React.createElement("h1", {id:"some-id"}, "react stuff");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
