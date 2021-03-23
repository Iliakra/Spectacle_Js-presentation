import React from 'react';
import {useSelector,useDispatch}from'react-redux'
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { InboxIcon } from '@material-ui/icons/MoveToInbox';
import { MailIcon } from '@material-ui/icons/Mail';
import {open_presentation_1, open_presentation_2} from '../actions/actions';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Menu () {
  const classes = useStyles();
  const dispatch=useDispatch();

  let presentation_1_open_handler = () => {
    dispatch(open_presentation_1());
  }

  let presentation_2_open_handler = () => {
    dispatch(open_presentation_2());
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="1" onClick={presentation_1_open_handler}>
            Презентация 1
          </ListItem>
          <ListItem button key="2" onClick={presentation_2_open_handler}>
            Презентация 2
          </ListItem>
        </List>
      </Drawer>
    </div>
    )
}