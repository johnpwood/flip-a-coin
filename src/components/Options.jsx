import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <button onClick={props.removeOptions}>Remove All</button>
    <p>number of options: {props.options.length}</p>
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
