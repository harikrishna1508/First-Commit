import { createStore, compose } from 'redux';
import rootReducer from './reducers/index.js';

const Store = compose(
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

export default Store;