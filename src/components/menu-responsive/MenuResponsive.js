import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Box  } from '@material-ui/core';
import styles from './menu-responsive.module.scss';
import { Link } from "gatsby"


const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	}
});

export default function TemporaryDrawer() {
    const classes = useStyles();

    const Links = [
        {  name: 'Actividades', to: 'courses' , icon: 'icon-support' },
        {  name: 'Puntajes', to: 'points', icon: 'icon-lectern'  },
        {  name: 'Nosotros', to: 'comunity' , icon: 'icon-star'  },
        {  name: 'reglas', to: 'comunity', icon: 'icon-group'  },
        {  name: 'blog', to: 'points', icon: 'icon-education'  }
    ]

	const [ state, setState ] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{ Links.map(( link, index) => (
                    <ListItem button key={link.to}>
                        
					    <Link  to={ link.to } >
                            <i className={`${ link.icon }`} ></i>
                            { link.name }</Link>
						{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} /> */}
					</ListItem>

				))}
			</List>
		</div>
	);

	return (
		<Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
			<Grid container alignItems="center" className={styles.menu__container} justify="flex-end" height="100%">
				<IconButton className={styles.menu__icon} onClick={toggleDrawer('right', true)} aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
					{sideList('right')}
				</Drawer>
			</Grid>
		</Box>
	);
}
