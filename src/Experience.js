import { Avatar, Card, CardActionArea, CardHeader, Fade, Grid, Hidden, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Image from 'next/image'
import { DateRange, LocationCity } from '@material-ui/icons';
import data from '../data.json'
import { useRef } from "react";
import useAnimate from "./useAnimate";
const { experience } = data

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)'
    }
  },
  cardHeader: {
    paddingTop: 0
  },
  cardActionArea: {
    height: '100%',
    background: theme.palette.type === 'dark' 
      ? 'linear-gradient(rgba(30,30,30,0.9), rgba(30,30,30,0.9))'
      : 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))',
  },
  expObj: {
    marginBottom: theme.spacing(4)
  },
  expTitle: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '4px',
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      borderRadius: '2px'
    }
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

export default function Experience() {

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
        <Typography variant="h2" gutterBottom align="center">
          Experience
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: '250ms' }}>
            <div>
              <Image
                alt="Experience"
                src="/experience.svg"
                width="500"
                height="500"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid container item xs={12} lg={6} direction="row" spacing={1} alignItems={align}>
        {
          Object.getOwnPropertyNames(experience).map((title, id) =>
            <Grid item key={id} className={classes.expObj}>
              <Typography variant="h4" align={textAlign} gutterBottom component="p" className={classes.expTitle}>
                {title}
              </Typography>
              <Grid container item direction="row" spacing={1} justifyContent="center">
                {
                  experience[title].map(({
                    organization,
                    role,
                    type,
                    startDate,
                    endDate,
                    city,
                    state,
                    country,
                    url,
                    thumbnail
                  }, i) =>
                    <Grid item xs={12} sm key={i}>
                      <Card style={{ minWidth: '250px' }} className={classes.card}>
                      
                        <CardActionArea
                          className={classes.cardActionArea}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CardHeader
                            avatar={
                              <Avatar variant="rounded">
                                <Image
                                  alt={`${organization} logo`}
                                  src={thumbnail}
                                  layout="fill"
                                />
                              </Avatar>
                            }
                            title={organization}
                            subheader={role + " - " + type}
                          />
                          <CardHeader
                            avatar={<DateRange />}
                            title={getHumanDiff(startDate, endDate)}
                            subheader={`${startDate} - ${endDate}`}
                            className={classes.cardHeader}
                          />
                          <CardHeader
                            avatar={<LocationCity />}
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