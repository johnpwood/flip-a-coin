class VisibilityToggle extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((p) => { return { visible: !p.visible }; });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          { this.state.visible? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible ? <p>These are the details</p> : ''}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>There are some hidden details in this page.</h1>
    <VisibilityToggle />
  </div>
    , document.getElementById('app'));

