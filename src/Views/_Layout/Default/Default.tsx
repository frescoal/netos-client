import React, { useState } from 'react';
import clsx from 'clsx';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Switch, PaletteType } from '@material-ui/core';
import { Menu, ChevronLeft, Notifications, Favorite } from '@material-ui/icons';

import { mainListItems, secondaryListItems } from '../../../Navigation/SidebarItem';
import useStyles from './style';

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
          <Switch checked={theme === 'dark'} onChange={switchTheme} />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
        }}
        open={open}
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
        <footer className={styles.footer}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="textSecondary" align="center">
              {new Date().getFullYear()}
              {' Copyright © '}
              Coded with
              <Favorite color="error" /> by Toni & Alain.
            </Typography>
          </Container>
        </footer>
      </main>
    </div>
  );
}

export default DefaultLayout;
