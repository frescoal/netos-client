import { PaletteType } from '@material-ui/core';
import { PayloadAction } from '@reduxjs/toolkit';
import { TOGGLE_THEME } from './Theme.types';

const INITIAL_STATE = {
  mode: 'dark',
};

const reducer = (state = INITIAL_STATE, action: PayloadAction<PaletteType>) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        mode: state.mode === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

export default reducer;
