const app = { visible: true };
const toggle = () => {
  app.visible = !app.visible;
  rendit();
};



function rendit() {
  const template = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggle}>Show Details</button>
    <p>{app.visible || 'here are some details that you can now see!'}</p>
  </div>);
  ReactDOM.render(template, document.getElementById('app'));
}

rendit();
