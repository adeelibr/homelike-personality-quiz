import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Routes
import Routes from './Routes';

// Material UI Theme Customization
import Theme from './styles/muiTheme';
// Store Configuration

const THEME = createMuiTheme(Theme);

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
