import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
      visibility: "hidden",
      [theme.breakpoints.down('sm')]: {
          visibility: "visible"
      }
    },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Actividades' },
  { icon: <SaveIcon />, name: 'Talleres' },
  { icon: <PrintIcon />, name: 'Puntajes' },
  { icon: <ShareIcon />, name: 'TecAcademy' },
  { icon: <DeleteIcon />, name: 'Blog' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setOpen(false);
    setHidden(prevHidden => !prevHidden);
  };

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
    // console.log(e)
  };

  const handleOpen = () => {
    if (!hidden) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onBlur={handleClose}
        onClick={handleClick}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClick}
          />
        ))}
      </SpeedDial>
    </div>
  );
}