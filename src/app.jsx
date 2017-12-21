class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    )
  }
}
      
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer!</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Option/></li>
          <li><Option/></li>
        </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        This will be an option.
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <input/>
        <button>Add Option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
