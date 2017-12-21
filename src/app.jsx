class IndecisionApp extends React.Component {
  render() {
    const options = ['first thing', 'second thing', 'third thing'];
    return (
      <div>
        <Header title = 'Indecision'
                subtitle = 'Put your life in the hands of a computer!' />
        <Action/>
        <Options options={options} />
        <AddOption/>
      </div>
    )
  }
}
      
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Put your life in the hands of a computer!</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('clicked');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.removeAll = this.handleRemoveAll.bind(this);
  }
  removeAll() {
    this.props.options = [];
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll.bind}>Remove All</button>
        <p>number of options: {this.props.options.length}</p>
        <ul>
          {this.props.options.map((x,i) => <Option key={i} optionText={x} />)}
      </ul>
        
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  sub(e) {
    e.preventDefault();
    const option = e.target.elements.newOption.value.trim();
    if (option){ alert(option); }
  }
  render() {
    return (
      
      <form onSubmit={this.sub}>
        <input name="newOption" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
