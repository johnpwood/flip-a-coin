
console.log('App.js has loaded.');

//const template = <div><h1>Informed Decision</h1><p>App info</p></div>;

const app={
    title:'Informed Decision',
    subtitle:"You've informed yourself, but you still need help making a decision",
    loc: "here",
    options:["first", "second"]
}

const template = (
	<div>
	<h1>{app.title}</h1>
	<p>{true && app.subtitle}</p>
	<p>Location: {app.loc || "no location"}</p>
	<p>{app.options.length >= 2 ? "Here are your options:" : "Not enough options."}
    </p>
	<ol><li>{app.options[0]}</li>
	<li>{app.options[1]}</li></ol>
	</div>
)

let count = 0;
const addOne = ()=> {
    console.log('addOne');
}
const minusOne = ()=>{
    count --;
    renderThisThing();    
};

const plusOne = ()=>{
    count ++;
    renderThisThing();
};

const reset = ()=>{
    count=0;
    renderThisThing();
};


const renderThisThing = () => {
    const templateTwo = (
	    <div>
	    <h1>Count: {count}</h1>
	    <button onClick={minusOne}>-1</button>
	    <button onClick={plusOne}>+1</button>
	    <button onClick={reset}>Reset</button>
	    </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

const appRoot = document.getElementById('app');

renderThisThing();

