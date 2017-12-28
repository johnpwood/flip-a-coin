import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

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
    if (!(this.state.options.filter(x => x === option).length === 0)) {
      return 'This option already exists.  Please enter a unique new option.';
    }
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

export default IndecisionApp;
