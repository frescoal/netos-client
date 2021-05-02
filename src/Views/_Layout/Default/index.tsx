import React, { useState } from 'react';
import clsx from 'clsx';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Switch, PaletteType } from '@material-ui/core';
import { connect } from 'react-redux';
import { Menu, ChevronLeft, Notifications, Favorite } from '@material-ui/icons';

import { mainListItems, secondaryListItems } from '../../../Navigation/SidebarItem';
import useStyles from './style';
import { toggleTheme } from '../../../Store/Theme/Theme.action';

type Props = {
  children: JSX.Element | JSX.Element[];
  theme: PaletteType;
  switchTheme: any;
};

function DefaultLayout({ children, theme, switchTheme }: Props) {
  const [open, setOpen] = useState(true);

  const styles = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleThemeChange = () => {
    switchTheme();
  };

  return (
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
          <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
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
        </Container>
      </main>
      <footer className={styles.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {new Date().getFullYear()}
      {'Copyright © '}
      Coded with
      <Favorite color="error" /> by Toni & Alain .
    </Typography>
  );
}

const mapStateToProps = (state: any) => ({
  theme: state.theme.mode,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    switchTheme: () => dispatch(toggleTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
