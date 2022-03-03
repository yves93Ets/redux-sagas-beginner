import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSage from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSage);

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onDec={() => action('DECREMENT_ASYNC')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
