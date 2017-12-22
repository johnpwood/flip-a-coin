class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.removeOptions = this.removeOptions.bind(this);
    this.pick = this.pick.bind(this);
    this.addOption = this.addOption.bind(this);
  }
  removeOptions(){
    this.setState((p) => {
      return { options: [] };
    });
  }
  pick() {
    alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
  }
  addOption(option) {
    if (!option) { return 'Enter an option first!'; }
    this.setState((p) => {
      return { options: p.options.concat([option]) };
    })
  }
    render() {
    return (
      <div>
        <Header title = 'Indecision'
                subtitle = 'Put your life in the hands of a computer!'
        />
        <Action hasOptions={this.state.options.length > 0}
          pick={this.pick}
        />
          <Options options={this.state.options}
                   removeOptions={this.removeOptions} />
          <AddOption addOption={this.addOption} />
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
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.pick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeOptions}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = { error: undefined };
  }
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.newOption.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input name="newOption" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
