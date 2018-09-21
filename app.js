function reducer(state, action) {
  if (action.type === 'INCREMENT') { return state + action.amount }
  if (action.type === 'DECREMENT') { return state - action.amount }

  return state;
}

const incrementAction = {
  type: 'INCREMENT',
  amount: 7,
};

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const decrementAction = {
  type: 'DECREMENT',
  amount: 7,
};

console.log(reducer(10, decrementAction));
console.log(reducer(9, decrementAction));
console.log(reducer(5, decrementAction));

const unknownAction = { type: 'UNKNOWN' };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));
