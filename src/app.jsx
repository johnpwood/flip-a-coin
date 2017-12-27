class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.removeOptions = this.removeOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.pick = this.pick.bind(this);
    this.addOption = this.addOption.bind(this);
  }
  
  removeOptions() {
    this.setState(() => ({ options: [] }));
  }
  removeOption(option) {
    this.setState(p => ({ options: p.options.filter(x => x !== option) }));
  }
  pick() {
    alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
  }
  addOption(option) {
    if (!option) { return 'Enter an option first!'; }
    this.setState(p => ({ options: p.options.concat([option]) }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {this.setState(() => ({"options": JSON.parse(json)}));}
    }
    catch(e) {
    }
  }
  componentDidUpdate(p){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);   
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
                   removeOptions={this.removeOptions}
                   removeOption={this.removeOption} />
          <AddOption addOption={this.addOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Put your life in the hands of a computer!</h2>
    </div>
  );
};

Header.defaultProps = {
  title: 'Default Title'
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
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ul>
        {props.options.map((x,i) => (
          <Option key={i}
                  optionText={x}
                  removeOption={props.removeOption}
                  />)
        )}
    </ul>
      </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=>{props.removeOption(props.optionText)}}>remove</button>
    </div>
  );
};

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
    this.setState(() => ({ error }));
    if(!error) { e.target.elements.option.value = ''; }
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
