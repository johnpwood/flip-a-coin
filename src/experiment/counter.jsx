class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { count: 0 };
  }
  increment() {
    // Because this.props and this.state may be updated asynchronously,
    // you should not rely on their values for calculating the next state.
    //    this.setState({ count: this.state.count+1 });
    this.setState((p) => { return { count: p.count + 1 }; });
  }
  decrement() {
    this.setState((p) => { return { count: p.count - 1 }; });
  }
  reset() {
    this.setState((p) => { return { count: 0 }; });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>        
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
