import React from 'react';

import './App.css';
import './Translations';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './Theme';
import DefaultLayout from './Views/_Layout/Default';
import Routes from './Navigation/Routes';

type Props = {
  mode: 'string';
};

function App({ mode }: Props) {
  const theme = createMuiTheme(Theme(mode));
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Routes />
        </DefaultLayout>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = (state: any) => ({
  mode: state.theme.mode,
});

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
