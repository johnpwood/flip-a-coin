'use strict';

console.log('App.js has loaded.');

//const template = <div><h1>Informed Decision</h1><p>App info</p></div>;

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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    count--;
    renderThisThing();
};

var plusOne = function plusOne() {
    count++;
    renderThisThing();
};

var reset = function reset() {
    count = 0;
    renderThisThing();
};

var renderThisThing = function renderThisThing() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: plusOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById('app');

renderThisThing();
