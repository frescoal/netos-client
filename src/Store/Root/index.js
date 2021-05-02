import { combineReducers } from 'redux';

import themeReducer from '../Theme/Theme.reducers';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
