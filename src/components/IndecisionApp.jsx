import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = { options: this.props.options };
  removeOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  pick = () => {
    const selectedOption =
          this.state.options[Math.floor(Math.random()*this.state.options.length)];
    this.setState(() => ({ selectedOption }));
  };
  addOption = option => {
    if (!option) { return 'Enter an option first!'; }
    if (!(this.state.options.filter(x => x === option).length === 0)) {
      return 'This option already exists.  Please enter a unique new option.';
    }
    this.setState(p => ({ options: p.options.concat([option]) }));
    return undefined;
  };
  removeOption = option => {
    this.setState(p => ({ options: p.options.filter(x => x !== option) }));
  };
  closeModal = () => {
    this.setState(p => ({ selectedOption: undefined }));
  };
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
      <div className="container">
        <Header title = 'Indecision'
                subtitle = 'Put your life in the hands of a computer!'
                />
        <div>
          <Action hasOptions={this.state.options.length > 0}
            pick={this.pick}
            />
            <Options options={this.state.options}
                     removeOptions={this.removeOptions}
                     removeOption={this.removeOption} />
            <AddOption
              addOption={this.addOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
          />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
