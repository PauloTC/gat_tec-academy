import React from 'react';
import { 
    Grid,
    MenuItem,
    Menu,
    Button,
    Typography } from '@material-ui/core';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Grid  container  alignItems="center" height="100%" >
        <Typography variant="body1"> ¡Hola,  Karen! </Typography>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </Grid>
  );
}
