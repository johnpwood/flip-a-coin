'use strict';

console.log('App.js has loaded.');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Informed Decision'
	),
	React.createElement(
		'p',
		null,
		'App info'
	)
);

var app = {
	title: 'Informed Decision',
	subtitle: "You've informed yourself, but you still need help making a decision",
	loc: "here",
	options: ["first", "second"]
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		true && app.subtitle
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		app.loc || "no location"
	),
	React.createElement(
		'p',
		null,
		app.options.length >= 2 ? "Here are your options:" : "Not enough options."
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			app.options[0]
		),
		React.createElement(
			'li',
			null,
			app.options[1]
		)
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
