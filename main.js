import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
