import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './Styles'
import { NavLink } from 'react-router-dom'
import { AppBar } from '@material-ui/core'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 500,
//   },
// });

function Navbar({ onLogout, selectedChar }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogoutClick = () => {
    fetch('/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(onLogout)
  }

  return (
    <div >
      <AppBar>
        <Tabs
          className={classes.navbar}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example" >
          <Tab component={NavLink} to='/account' icon={<AccountBoxIcon />} label="ACCOUNT" />
          <Tab component={NavLink} to='/high_scores' icon={<EmojiEvents />} label="HI-SCORES" />

          {selectedChar ? <Tab component={NavLink} to='/battle' icon={<SportsKabaddiIcon fontSize="large" />} label="START BATTLE" /> : null}

          <Tab component={NavLink} to='/character' icon={<AccountCircleIcon />} label="CHARACTER" />
          <Tab component={NavLink} to='/' icon={<ExitToAppIcon />} label="LOGOUT" onClick={handleLogoutClick} />

        </Tabs>
      </AppBar>
    </div>
  );
}


export default Navbar