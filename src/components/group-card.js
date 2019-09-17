import React, { Fragment } from 'react'
import { 
    Box,
    Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        borderRadius: 8,
        boxShadow: '1px 1px 16px 0 rgba(50, 16, 99, 0.1)',
        height: 80,
        color: 'white',
        '& div' :  {
            fontSize: '16px !important',
        }
    },
    icon: {
        fontSize : 30
    },
    icon35: {
        fontSize: 35
    },
    item: {
        '&:nth-of-type(5)' : {
            boxShadow:'none',
            position: 'absolute',
            right: '-8px',
            '& div' : {
                color : 'black !important', 
                background: 'transparent !important',
                fontWeight: 400,
                display: 'flex',
                padding: 0 
            },
            '& p' :  {
                display: 'flex  !important',
                paddingTop: '30px'
            },
            '& i' : { 
                display: 'none'
            },
            'name' : {
                marginRight: 10
            }
        },
        '&:nth-of-type(4)' : {
            '& div' :  {
                fontSize: '16px !important',
                fontWeight: 400,
                background: 'white !important',
                color:  'black !important',
                display: 'flex',
                padding: 0
            },
            '& p' :  {
                display: 'flex  !important',
                paddingBottom: '30px'
            },
            '& i' : { 
                display: 'none'
            }
        }
    },
    "@global": {
        ".Facebook": {
            background: '#475993',
            "&:before" : {
                content: ''
            }
        },
        ".Apple" : {
            background : '#5e5e5e'
        },
        ".Tesla" : {
            background : '#e4404a'
        },
        ".Google" : {
            background : '#f6be00'
        },
        ".Netflix" : {
            background: '#e4404a'
        }
      }
});

const GroupCard = (props) => {
    const classes = useStyles();
    return (
        <Typography>
            <Box fontSize="body2.fontSize" > {  props.data.name }  puntos</Box> 
            <Box fontSize="body2.fontSize" > {  props.data.points }  puntos</Box> 
        </Typography>
    )
}

export default GroupCard