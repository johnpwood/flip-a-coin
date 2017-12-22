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
      
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Put your life in the hands of a computer!</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.pick}>What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeOptions}>Remove All</button>
      <p>number of options: {props.options.length}</p>
      <ul>
        {props.options.map((x,i) => <Option key={i} optionText={x} />)}
    </ul>
      </div>
  );
}


const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
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
