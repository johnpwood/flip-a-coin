'use strict';

// console.log('App.js has loaded.');

// const template = <div><h1>Informed Decision</h1><p>App info</p></div>;

var app = {
  title: 'Informed Decision',
  subtitle: "You've informed yourself, but you still need help making a decision",
  loc: 'here',
  options: []
};
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.random() * app.options.length;
  console.log(randomNum);
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
      app.loc || 'no location'
    ),
    React.createElement(
      'p',
      null,
      app.options.length >= 2 ? 'Here are your options:' : 'Not enough options.'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (x, i) {
        return React.createElement(
          'li',
          { key: i },
          ' ',
          x,
          ' '
        );
      })
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
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    )
  );

  var submitOption = function submitOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
    }
    renderThisThing();
  };

  var removeAll = function removeAll(e) {
    e.preventDefault();
    app.options = [];
    renderThisThing();
  };

  ReactDOM.render(template, document.getElementById('app'));
};

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
renderThisThing();
