import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ setSeed }) => {
  const classes = useStyles();
  const [seedVal, setSeedVal] = useState("");

  const handleChange = (e) => {
    setSeedVal(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSeed(seedVal);

    setSeedVal("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            RandomUser App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={seedVal}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

// import * as React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Container,
// } from "@material-ui/core";
// import { Home } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   navbarDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`,
//   },
//   navDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`,
//   },
//   linkText: {
//     textDecoration: `none`,
//     textTransform: `uppercase`,
//     color: `white`,
//   },
// });

// const navLinks = [
//   { title: `about us`, path: `/about-us` },
//   { title: `product`, path: `/product` },
//   { title: `blog`, path: `/blog` },
//   { title: `contact`, path: `/contact` },
//   { title: `faq`, path: `/faq` },
// ];

// const Header = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Container maxWidth="md" className={classes.navbarDisplayFlex}>
//           <IconButton edge="start" color="inherit" aria-label="home">
//             <Home fontSize="large" />
//           </IconButton>
//           <List
//             component="nav"
//             aria-labelledby="main navigation"
//             className={classes.navDisplayFlex}
//           >
//             {navLinks.map(({ title, path }) => (
//               <a href={path} key={title} className={classes.linkText}>
//                 <ListItem button>
//                   <ListItemText primary={title} />
//                 </ListItem>
//               </a>
//             ))}
//           </List>
//         </Container>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default Header;
{
  /* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */
}
