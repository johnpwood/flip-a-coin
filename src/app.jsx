
// console.log('App.js has loaded.');

// const template = <div><h1>Informed Decision</h1><p>App info</p></div>;

const app = {
  title: 'Informed Decision',
  subtitle: "You've informed yourself, but you still need help making a decision",
  loc: 'here',
  options: [],
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const renderThisThing = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{true && app.subtitle}</p>
      <p>Location: {app.loc || 'no location'}</p>
      <p>{app.options.length >= 2 ?
          'Here are your options:' :
        'Not enough options.'}
      </p>
      <ol>
        {app.options.map((x, i) => <li key={i}> { x } </li>)}
      </ol>
      <form onSubmit={submitOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button disabled={app.options.length===0}
    onClick={onMakeDecision}>
      What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
}

const submitOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderThisThing();
};

const removeAll = (e) => {
  e.preventDefault();
  app.options = [];
  renderThisThing();
};




const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
renderThisThing();
