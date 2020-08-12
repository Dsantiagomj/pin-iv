// import React, { useContext } from "react";
// import { Link } from "react-router-dom";

// import styled from "styled-components";
// import { FiLogOut } from "react-icons/fi";

// import UserContext from "../services/contexts/useUserContext";



// const ContentWrapper = styled.div`
//   height: 100vh;
//   overflow: scroll;
//   width: 100vw;
// `;

// const Header = styled.div`
//   align-items: center;
//   background: white;
//   border-bottom: solid 1px #eceff2;
//   display: flex;
//   height: 5rem;
//   justify-content: space-between;
//   margin-bottom: 0rem;
//   overflow: hidden;
//   padding: 0 1rem;
//   width: 100%;
//   @media (min-width: 768px) {
//     padding: 0 5rem;
//   }
// `;

// const AppInfo = styled.div``;
// const UserInfo = styled.div`
//   align-items: center;
//   display: flex;
// `;
// const UserImage = styled.img`
//   border-radius: 50%;
//   height: 50px;
//   margin-top: 1rem;
//   width 50px;
// `;
// const UserText = styled.span`
//   font-size: 0.75rem;
//   font-weight: bold;
//   margin-left: 1rem;
// `;

// const LogOut = styled.div`
//   color: red;
//   margin-left: 1rem;
//   &:hover {
//     color: darkred;
//   }
//   @media (min-width: 768px) {
//     margin-left: 5rem;
//   }
// `;

// const Dashboard = ({ component: Component, props }) => {
//   const { user } = useContext(UserContext);
//   const { user: userData } = JSON.parse(user);

//   return (
//     <ContentWrapper>
//       <Header>
//         <AppInfo>
//           <Logo type="black" height="40px" />
//         </AppInfo>
//         <UserInfo>
//           <UserImage src={userData.photoURL} alt="profile" loading="lazy" />
//           <UserText>{userData.displayName}</UserText>
//           <Link to="/signout">
//             <LogOut>
//               <FiLogOut />
//             </LogOut>
//           </Link>
//         </UserInfo>
//       </Header>
//       <Component {...props} />
//     </ContentWrapper>
//   );
// };

// export default Dashboard;

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Logo from "../components/logo";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({component: Component, props}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Logo type="black" height="40px" />
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Component {...props} />
      </main>
    </div>
  );
}
