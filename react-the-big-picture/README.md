# React: The Big Picture

## History

* Created by Facebook in 2011
* Used by Instagram in 2012
* Open Sourced in 2013
* Emabraced by many large companies after 2014
* React Native came out in 2015
* Over 30k components in Facebook and also used by many in Fortune 500

## Why React?

### Flexebility

* It's a library and not a framework.

#### Where can I use `React`?
* Web apps
* Static site (gatsby)
* Mobile (React Native)
* Desktop
* Server rendering (Next.JS)
* Virtual Reality (React VR)
* In summary, Learn `React` once, write everywhere.

#### React Renderers

* Web apps - `react-dom` to render your components to `HTML`.
* Native Mobile apps - `react-native` to render reactive components into native friendly code.
* React VR - `react-vr` to render react components into a virtual reality environment.


### Developer experience

* You rarely use the docs.
* :point_down: You basically have a function that returns what looks like `HTML`.

```javascript
import React from 'react';

function HelloWorld(props) {
    return <div>Hello {props.name}</div>
}
```
* You can also declare `React` components using a javascript class.

```javascript
import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <div>Hello {props.name}</div>
    }
}
```
* You'll see what looks like `HTML` but rendered in javascripts within the `render()` function. That is JSX.
* `JSX` compiles to JS.

`<h1 color="red">Heading here</h1>`

:point_down:

`React.createElement("h1", {color: "red"}, "Heading here")`
* The call to `createElement` generates `HTML`.
* `createElement(tag name, obj of attributes to set, markup to sit inside the tag)`
* Should you wish to creat e react app you can run:
`npx create-react-app my-app`
or
`npm init react-app my-app`
* Should you wish not to just code your ideas without configuration, you can use 
[CodeSandbox](https://codesandbox.io/).

### Corporate investment

* Facebook still maintains react even though it's open source. 
* Facebook has over 30k components and use code mods to help upgrade old react versions to new react versions you may use. 

### Community support
### Performance
### Testability