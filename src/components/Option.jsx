import React from 'react';

const Option = (props) => (
  <div>
    {props.optionText}
    <button onClick={() => { props.removeOption(props.optionText); }}>x</button>
  </div>
);

export default Option;
