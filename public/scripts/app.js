'use strict';

var app = { visible: true };
var toggle = function toggle() {
  app.visible = !app.visible;
  rendit();
};

function rendit() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      'Show Details'
    ),
    React.createElement(
      'p',
      null,
      app.visible || 'here are some details that you can now see!'
    )
  );
  ReactDOM.render(template, document.getElementById('app'));
}

rendit();
