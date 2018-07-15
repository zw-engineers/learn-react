# React: Getting Started

# Introduction

## Your first component

### React Components

* A component can either be a `functional component` or a `class component`.
* Sometime described as stateless and stateful components.


* Functional Component
    * Often associated with the presentational concepts.

```javascript
const MyComponent = (props) => {
    return (
        <elementOrComponent ../>
    );
}
```
    * Simplest form of a `React` component.
    * A simple function, with a simple contract. It recieves an object of properties `(props)`, and it returns what looks like HTML but actually is `JSX`. 

* Class Component
    * A more featured way to define a `React` component.
    * Acts like a function that recieves `props` but that function also considers a private internal state as additional input that controls the returned `JSX`.
    * This private internal state is what give `React` its reactive nature. When the state of a `Class Component` changes, `React` will automatically re-render that component.
    * `State` and `Props` have one important difference, the `State` can be changed while the `Props` are fixed values. 
    * `Class Components` can only change their internal state, not their properties.