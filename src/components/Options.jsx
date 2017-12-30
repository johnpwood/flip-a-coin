import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <button
      className="button button--link"
      onClick={props.removeOptions}>Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ul>
      {props.options.map(x => (
        <Option
          key={x}
          optionText={x}
          removeOption={props.removeOption}
        />))}
    </ul>
  </div>
);


export default Options;
