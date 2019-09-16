import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { 
  Typography,
  Container,
  Box
} from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'http://tinyimg.io/i/TacBZwj.jpeg',
  },
  {
    label: 'Bird',
    imgPath:
      'http://tinyimg.io/i/TacBZwj.jpeg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'http://tinyimg.io/i/TacBZwj.jpeg',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
    'http://tinyimg.io/i/TacBZwj.jpeg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
    'http://tinyimg.io/i/TacBZwj.jpeg',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative'
  },
  steps: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'transparent',
    fontSize: 0
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 9,
    paddingLeft: theme.spacing(4),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  button: {
    textTransform: "capitalize",
    color: "white"
  },
  title: {
    color: '#fff',
    maxWidth: 600
  },
  img: {
    height: 255,
    [theme.breakpoints.up('md')]: {
        height: 400
    },
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Container maxWidth="md"  >
          <Typography  >
              <Box mb={2} className={classes.title} fontSize="h4.fontSize" fontWeight={800} >{tutorialSteps[activeStep].label}</Box>
            </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
              Inscribete ahora
          </Button>
        </Container>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        className={classes.steps}
        nextButton={
          <Button size="small" className={classes.button} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" className={classes.button} onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;