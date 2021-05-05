import { connect } from 'react-redux';
import { toggleTheme } from '../../../Store/Theme/Theme.action';

import DefaultLayout from './Default';

const mapStateToProps = (state: any) => ({
  theme: state.theme.mode,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    switchTheme: () => dispatch(toggleTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
