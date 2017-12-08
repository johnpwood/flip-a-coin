'use strict';

console.log('App.js has loaded.');

//const template = <div><h1>Informed Decision</h1><p>App info</p></div>;

var app = {
				title: 'Informed Decision',
				subtitle: "You've informed yourself, but you still need help making a decision",
				loc: "here",
				options: []
};

var submitOption = function submitOption(e) {
				e.preventDefault();
				var option = e.target.elements.option.value;
				if (option) {
								app.options.push(option);
								e.target.elements.option.value = "";
				}
				renderThisThing();
};

var removeAll = function removeAll(e) {
				e.preventDefault();
				app.options = [];
				renderThisThing();
};

var renderThisThing = function renderThisThing() {
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
								),
								React.createElement(
												'form',
												{ onSubmit: submitOption },
												React.createElement('input', { type: 'text', name: 'option' }),
												React.createElement(
																'button',
																null,
																'Add Option'
												)
								),
								React.createElement(
												'p',
												null,
												app.options.length
								),
								React.createElement(
												'button',
												{ onClick: removeAll },
												'Remove All'
								)
				);
				ReactDOM.render(template, document.getElementById('app'));
};

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
renderThisThing();
