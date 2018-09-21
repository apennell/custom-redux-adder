function reducer(state, action) {
  if (action.type === 'INCREMENT') { return state + 1 }
  if (action.type === 'DECREMENT') { return state - 1 }

  return state;
}

const incrementAction = { type: 'INCREMENT' };

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const decrementAction = { type: 'DECREMENT' };

console.log(reducer(10, decrementAction));
console.log(reducer(9, decrementAction));
console.log(reducer(5, decrementAction));

const unknownAction = { type: 'UKNOWN' };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));
