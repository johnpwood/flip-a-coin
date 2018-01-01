import React from 'react';
import Option from './Option';


const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>

      <button
        className="button button--link"
        onClick={props.removeOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">
      Please add an option to get started!</p>}
      {props.options.map((x, i) => (
        <Option
          key={x}
          count={i + 1}
          optionText={x}
          removeOption={props.removeOption}
        />))}
  </div>
);


export default Options;
