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
    
1) Provider - All container components need access to the Redux store so they can subscribe to it. One option would be to pass it as a prop to every container component. However it gets tedious, as you have to wire store even through presentational components just because they happen to render a container deep in the component tree.

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
<!-- TODO: Add more reading info on REDUX lifecycle. -->