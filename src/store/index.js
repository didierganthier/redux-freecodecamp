const { createStore } = require('redux');

const reducerFn = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    case 'ADD BY':
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};

const store = createStore(reducerFn);
export default store;
