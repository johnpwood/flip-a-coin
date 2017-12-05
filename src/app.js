
console.log('App.js has loaded.');

var template = <div><h1>Informed Decision</h1><p>App info</p></div>;

var app={
    title:'Informed Decision',
    subtitle:"You've informed yourself, but you still need help making a decision",
    loc: "here",
    options:["first", "second"]
}

var template = (
	<div>
	<h1>{app.title}</h1>
	<p>{true && app.subtitle}</p>
	<p>Location: {app.loc || "no location"}</p>
	<p>{app.options.length >= 2 ? "Here are your options:" : "Not enough options."}
    </p>
	<ol><li>{app.options[0]}</li>
	<li>{app.options[1]}</li></ol>
	</div>
)	
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

