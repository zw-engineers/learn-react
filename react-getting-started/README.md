# React: Getting Started

# Introduction

## Your first component

### React Components

* A component can either be a `Function component` or a `Class component`.
* Sometimes described as `stateless` and `stateful` components.


* Function Component
    * Often associated with the presentational concepts.
    * Simplest form of a `React` component.
    * A simple function, with a simple contract. It recieves an object of properties `(props)`, and it returns what looks like HTML but actually is `JSX`. 

```javascript
const MyComponent = (props) => {
    return (
        <elementOrComponent ../>
    );
}
```

* Class Component
    * A more featured way to define a `React` component.
    * Acts like a function that recieves `props` but that function also considers a private internal state as additional input that controls the returned `JSX`.
    * This private internal state is what give `React` its reactive nature. When the state of a `Class Component` changes, `React` will automatically re-render that component.
    * `State` and `Props` have one important difference, the `State` can be changed while the `Props` are fixed values. 
    * `Class Components` can only change their internal state, not their properties.
    
<p align="center">
    <img src="https://user-images.githubusercontent.com/29547780/42735313-816eef1e-8849-11e8-8e34-d55083a27859.png">
</p>

* On the left, the component is written in a special `JSX` syntax.
* `JSX` allows us to describe or `DOM` in a syntax very close to the DOM we are used to.
* It is optional however, `React` can be used without using `JSX` as shown on the code on the right above.
* In fact `React` compiles the `JSX` code on the left to pure `Javascript` as the code on the right.
* On the right, is a Javascript representation of the DOM.

### Your First Component

#### Creating a simple React Component

```javascript
function () {
	return (
  	<button>Go</button>
  );
}
```
* To use a React component, we need to give it a name that we can then reference.

```javascript
const Button = function () {
	return (
  	<button>Go</button>
  );
}
```
* Once we assign that reference we do not want to change it hence the use of the `const` for _constant_.

#### Mounting a component in React
* To mount a component in a browser we use the `ReactDOM.render()`:

```javascript
ReactDOM.render(<Button />, mountNode)
```
* This takes in two arguments: 
    * The component to render - `<Button />`.
    * The element in which the component should be rendered - `mountNode`.
* *Notice* we used a title case: `Button` for our constant. That is because
it is a requirement in React so that the library can distinguish between 
React elements and regular elements like the `<button>` element.

#### Props

* A React element recieves one argument:

```jsx
const Button = function (props) {
	return (
  	<button>{props.label}</button>
  );
};

ReactDOM.render(<Button label="Do" />, mountNode)
```
* `Props` - This argument allows us to make the component more reusable.
* Props is an object that holds all the values that were passed when the component was rendered.
* We should also try to use arrow functions where we can:

```jsx
const Button = (props) => {
	return (
  	<button>{props.label}</button>
  );
};

ReactDOM.render(<Button label="Do" />, mountNode)
```

#### Increment Button Value of Component

* We want to increment the button value everytime we click the button. 
So when we click the button 5 it should increment by one and change its
value to 6 and so on.
* Since this is something that needs to be changed in the component, it
belongs to the state of the component.
* We basically need the component to re-render itself everytime the counter
changes.
* We cannot use a `props` here because properties are _immutable_.
* However, our button component is currently a _function component_ and a 
_function component_ cannot have state.
* So we need to upgrade this component to a _class component first_:

```jsx
class Button extends React.Component {
	render() {
		return (
  	<button>42</button>
  );
  }
}

ReactDOM.render(<Button />, mountNode)
```
* We first define a `class` that extends `React.Component`.
* In that class we then define a `render()` function.
* This `render()` function is what returns the component's _JSX_.
The HTML button in our case.
* We won't need the `function component` anymore so we can delete it.
* Now the button is being rendered in a `class component` and we can 
start using a _private state_ on that component.

#### Using state objects

* To use a state objeect, we first need to initialise it:

```jsx
class Button extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {counter: 9};
  }
	render() {
		return (
  	<button>
    	{this.state.counter}
    </button>
  );
  }
}

ReactDOM.render(<Button />, mountNode)
```
* We do that inside the constructor of the `Button` class.
* We just define a `constructor` function which recieves a
`props` object.
* We will then call the `super()` method to honour the 
inheritance of this component.
* After that we initialise `this.state` to whatever we want 
e.g. `this.state = anything you want here as a value`.
* The properties of this _state_ object are the various elements of the state.
* For our case we need a `counter` state - `{counter: 9}`.
* We can then read this value in our `render()` function using the `this.state.counter`.
* The `this` keyword refers to the component instance we are handing off 
to the React DOM here.
* We can also use a class property without creating the constructor call as below:

```jsx
class Button extends React.Component {
  state = {counter: 5};
  
	render() {
		return (
  	<button>
    	{this.state.counter}
    </button>
  );
  }
}

ReactDOM.render(<Button />, mountNode)
```