import React from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDec,
}) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <button onClick={onIncrement}>Increment</button>{' '}
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onDec}>onDec</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;