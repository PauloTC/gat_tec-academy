import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Box, IconButton, ListItem, List, Drawer  } from '@material-ui/core';
import styles from './menu-responsive.module.scss';
import { Link } from "gatsby"


const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	},
	link: {
		textDecoration: 'none',
		fontSize: 16,
		display: 'flex',
		alignItems: 'center',
		color: '#321063',
		'&$active' :  {
			color: '#ff00a6 !important'
		},
		'&$hover': {
			color: 'green !important',
		  },
	},

});

export default function TemporaryDrawer() {
    const classes = useStyles();

    const Links = [
        {  name: 'Actividades', to: 'courses' , icon: 'icon-support' },
        {  name: 'Puntajes', to: 'points', icon: 'icon-lectern'  },
        {  name: 'Nosotros', to: 'comunity' , icon: 'icon-star'  },
        {  name: 'Reglas', to: 'rules' , icon: 'icon-education'  }
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
                        
					    <Link
							activeClassName={ classes.activelink } 
							className={ classes.link }  
							to={ link.to } >
                            {/* <i className={`${ link.icon }`} ></i> */}
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
