# Learn-React-Redux

    * Store - Holds our state - THERE IS ONLY ONE STATE.
    * Action - State can be modified using actions - SIMPLE OBJECTS
    * Dispatcher - Action need to be sent by someone - known as dispatching an action
    * Reducer - Receives an action and modifies the state to give us a new state.
        * - Pure functions
        * - Only mandatory argument is 'type'
    * Subscriber - Listens for state change to update the ui.