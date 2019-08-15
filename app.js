function reducer(state, action) {
  if (action.type === 'INCREMENT') { return state + action.amount }
  if (action.type === 'DECREMENT') { return state - action.amount }

  return state;
}


// Custom function that behaves like Redux's `createStore()`
// "Factory Pattern"--pattern used in JS for creating complex objects, like our store
// Provides a closure for variables declared inside the factory function
function createStore(reducer) {
  // Close over `state` variable to make private and inaccessible outside of `createStore()``
  // Only available to the functions inside `createStore()`, preventing unintended reads/writes
  // Allows it to "live on" between function calls
  let state = 0;

  // Provide read access to state from outside `createStore()` by returning `state`
  const getState = () => (state);

  // Send actions to the store
  // Calls reducer fn with argument with state and action (including add'l properties)
  // `dispatch` sets state to reducer's return value but doesn't return state itself
  // ==> `dispatch` only sends notification to store to perform action, doesn't read state
  const dispatch = (action) => { state = reducer(state, action); };

  return {
    getState, 
    dispatch,
  };
}

// Create store object and dispatch actions
const store = createStore(reducer);

const incrementAction = {
  type: 'INCREMENT',
  amount: 3,
};

const decrementAction = {
  type: 'DECREMENT',
  amount: 4,
};

// Dispatch actions and read `state`
store.dispatch(incrementAction);
console.log(store.getState());
// => 3
store.dispatch(incrementAction);
console.log(store.getState());
// => 6
store.dispatch(decrementAction);
console.log(store.getState());
// => 2
