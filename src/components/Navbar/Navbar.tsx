import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from '@material-ui/core';
import navbarItem from './navbarItem.json';
import INavBar from '../../common/interface/INavBar'
import ISubNavBar from '../../common/interface/ISubNavBar';
import useStyles from './Navbar.style';
import useNavbar from './hooks/useNavbar';

const NavBar = () => {
  const classes = useStyles();
  const { anchorEl, handleClick, handleClose } = useNavbar();

  return (
    <div className={classes.root}>
      {navbarItem.map((item: INavBar) => (
        <div key={item.id}>
          {item.subNavBar.length === 0 ?
            <>
              <Button>
                <Link to={item.path} className={classes.link}>{item.name}</Link>
              </Button>
            </> :
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {item.name}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {item.subNavBar.map((subItem: ISubNavBar) => (
                  <MenuItem key={subItem.id} onClick={handleClose}>
                    <Link to={subItem.path} className={classes.link}>{subItem.name}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default NavBar;