import { Avatar, Card, CardActionArea, CardHeader, Fade, Grid, Hidden, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Image from 'next/image'
import { DateRange, LocationCity } from '@material-ui/icons';
import data from '../data.json'
import { useRef } from "react";
import useAnimate from "./useAnimate";
const { realisations } = data

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: '100%',
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
    }
  },
  cardHeader: {
    paddingTop: 0
  },
  cardActionArea: {
    height: '100%',
  },
  expObj: {
    marginBottom: theme.spacing(4)
  },
  icon: {
    color: theme.palette.primary.main,
  },
  title: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: theme.palette.primary.main,
      borderRadius: '2px',
    }
  },
  portfolioCard: {
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$fadeIn 0.5s ease-out forwards',
    animationDelay: props => `${props.index * 0.1}s`
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  }
}))

const getHumanDiff = (startDate, endDate) => {
  let str = ""
  const start = new Date(startDate)
  const end = !!endDate ? new Date(endDate) : new Date()
  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    str += years + " year"
    if (years > 1)
      str += "s"
  }

  if (str.length > 0)
    str += ", "

  if (months > 0) {
    str += months + " month"
    if (months > 1)
      str += "s"
  }

  return str;
}

export default function Realisation() {

  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const align = "center"
  const textAlign = "center"

  const animRef = useRef(null)
  const animate = useAnimate(animRef)

  return (
    <Grid direction="row" container justifyContent="center" alignItems="center" spacing={10} className={classes.cont}>
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom align="center" className={classes.title}>
          Portfolio
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: '250ms' }}>
            <div>
              <Image
                alt="Experience"
                src="/experience.svg"
                width="996.46"
                height="828.18"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid container item xs={12} lg={6} direction="row" spacing={1} alignItems={align}>
        {
          Object.getOwnPropertyNames(realisations).map((title, id) =>
            <Grid item key={id} className={classes.expObj}>
              <Typography variant="h4" align={textAlign} gutterBottom component="p" className={classes.title}>
                {title}
              </Typography>
              <Grid container item direction="row" spacing={1} justifyContent="center">
                {
                  realisations[title].map(({
                    organization,
                    role,
                    type,
                    startDate,
                    endDate,
                    city,
                    state,
                    country,
                    url,
                  }, i) =>
                    <Grid item lg={6} sm={6} md={3} xs={12} key={i}>
                      <Card className={`${classes.card} ${classes.portfolioCard}`} style={{ '--index': i }}>
                        <CardActionArea
                          className={classes.cardActionArea}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer">
                          <CardHeader
                            title={organization}
                            subheader={role + " - " + type}
                          />
                          <CardHeader
                            avatar={<DateRange className={classes.icon} />}
                            title={getHumanDiff(startDate, endDate)}
                            subheader={`${startDate} - ${endDate}`}
                            className={classes.cardHeader}
                          />
                          <CardHeader
                            avatar={<LocationCity className={classes.icon} />}
                            subheader={`${city}, ${state}, ${country}`}
                            className={classes.cardHeader}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              </Grid>
            </Grid>
          )
        }
      </Grid>
      <div ref={animRef}></div>
    </Grid>
  )
}