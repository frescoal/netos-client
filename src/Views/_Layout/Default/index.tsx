import React, { useState } from 'react';

import clsx from 'clsx';
import { CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Switch } from '@material-ui/core';

import { Menu, ChevronLeft, Notifications, Favorite } from '@material-ui/icons';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { mainListItems, secondaryListItems } from '../../../Navigation/SidebarItem';
import useStyles from './style';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function DefaultLayout({ children }: Props) {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const styles = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(styles.appBar, open && styles.appBarShift)}>
          <Toolbar className={styles.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(styles.menuButton, {
                [styles.hide]: open,
              })}
            >
              <Menu />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
              Dashboard
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(styles.drawer, {
            [styles.drawerOpen]: open,
            [styles.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [styles.drawerOpen]: open,
              [styles.drawerClose]: !open,
            }),
          }}
        >
          <div className={styles.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={styles.content}>
          <div className={styles.appBarSpacer} />
          <Container maxWidth="lg" className={styles.container}>
            <Grid container spacing={3}>
              {children}
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {new Date().getFullYear()}
      {'Copyright © '}
      Coded with
      <Favorite /> by Toni & Alain .
    </Typography>
  );
}
