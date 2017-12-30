import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  addOption = e => {
    e.preventDefault();
    const option = e.target.elements.newOption.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({ error }));
    if(!error) { e.target.elements.newOption.value = ''; }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input name="newOption" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

