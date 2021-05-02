import { createStore } from 'redux';

import rootReducer from './Root';

const store = createStore(rootReducer);

export default store;
