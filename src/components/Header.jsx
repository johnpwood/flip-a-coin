import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>Put your life in the hands of a computer!</h2>
  </div>
);

Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
