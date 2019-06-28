# Learn-React-Redux

This is based on a good source explaining how Redux works with React [here](https://www.youtube.com/watch?v=93p3LxR9xfM&t).

<p align="center">
    <img src="https://user-images.githubusercontent.com/29547780/59553727-15c87780-8f91-11e9-8035-aaab63a7f18f.png" />
</p>

    * Store - Holds our state - THERE IS ONLY ONE STATE.
    * Action - State can be modified using actions - SIMPLE OBJECTS
    * Dispatcher - Action need to be sent by someone - known as dispatching an action
    * Reducer - Receives an action and modifies the state to give us a new state.
        * - Pure functions
        * - Only mandatory argument is 'type'
    * Subscriber - Listens for state change to update the ui.
    * Middleware - allows us to directly access the dispatch() method so that we can make
    async calls from our actions.
    
## Blog Post App

<p align=center>
    <img src="https://user-images.githubusercontent.com/29547780/60361018-04da2600-99d5-11e9-9f2d-a477b2f7067e.png"/>
</p>
   

## The Problem

- The `PostForm` component allows users to add posts to a blog by adding a title and some content body 
however, the `Posts` component needs to update the list of posts when a new blog post is added.

## Solution

Since the state of PostForm and Posts are separate, we need a way to keep the two 
in sync when any component updates its own information.
In this case, Redux allows components to share the same state. This means that Posts
component can _listen_ to updates made by the PostForm component when a new blog
post is added.

## Entry Point

First we have our component e.g. `App` which contains our sub components,
`PostForm` and `Posts`.

```js
function App() {
    return (
        <div className="App">
            <PostForm/>
            <hr/>
            <Posts/>
        </div>
    );
}

export default App;
```

In order for PostForm and Posts to share the same state it makes sense to have the
Redux `Store` in a parent component `App.js`.

With redux we need to create the `store` and we do this by using a `Provider` which takes in 
a created store as a parameter. E.g. below:

```js
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PostForm/>
                <hr/>
                <Posts/>
            </div>
        </Provider>
    );
}

export default App;
```

In our case we abstracted our store into a separate file called `store.js`. So our store looks like:
```js
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
```
 



---

1) Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
   
   Here's an example action which represents fetching a blog post:
   
   ```js
   import {FETCH_POSTS} from "./types";
   
   export const fetchPosts = () => dispatch => {
       fetch('https://jsonplaceholder.typicode.com/posts')
           .then(response => response.json())
           .then(posts => dispatch({
               type: FETCH_POSTS,
               payload: posts
           }))
   };
   ```
   
   Here's an example action which represents adding a new blog post:
   
   ```js
   import {NEW_POST} from "./types";
   
   export const createPost = (postData) => dispatch => {
       fetch('https://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(postData)
       })
           .then(response => response.json())
           .then(post => dispatch({
               type: NEW_POST,
               payload: post
           }))
   };
   ```
   
   Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

2) Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
    
    Reducers take two parameters:
    
    `state` - Typically this would be the initialState of the component.
    `action` - This would be the component actions that we would have created for that
    particular component. In our case, `post` is our component so naturally you would have
    an action with a name like `postActions` which will contain actions as in the secion above.
   
    ```js
    export default function (state = initialState, action) {
      switch (action.type) {
          case FETCH_POSTS:
              return {
                  ...state,
                  items: action.payload
              };
          case NEW_POST:
              return {
                  ...state,
                  item: action.payload
              };
          default:
              return state;
      }
    }
    ```

3) Provider - All container components need access to the Redux store so they can subscribe to it. One option would be to pass it as a prop to every container component. However it gets tedious, as you have to wire store even through presentational components just because they happen to render a container deep in the component tree.

    The option we recommend is to use a special React Redux component called <Provider> to magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component:
    
    ```js
    import { render } from 'react-dom'
    import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import todoApp from './reducers'
    import App from './components/App'
    
    const store = createStore(todoApp)
    
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
    ```
    
4) Store - In the previous sections, we defined the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.
    
    The *Store* is the object that brings them together. The store has the following responsibilities:
    
    * Holds application state;
    * Allows access to state via getState();
    * Allows state to be updated via dispatch(action);
    * Registers listeners via subscribe(listener);
    * Handles unregistering of listeners via the function returned by subscribe(listener).
    
    It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

   
<!-- TODO: Add more reading info on REDUX lifecycle. -->