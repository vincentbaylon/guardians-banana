import { Grid } from '@material-ui/core'

import useStyles from './Styles'
import ProgressBar from './ProgressBar'

import Hero from '../assets/characters/vince-idle.png'
import Enemy from '../assets/characters/abraham-idle.png'

import { useState, useEffect } from 'react'

function Battle() {
  const classes = useStyles()

  const [battle, setBattle] = useState()
  const [enemy, setEnemy] = useState()
  const [skillOne, setSkillOne] = useState({
    skill_name: "",
    skill_effect: "",
    skill_cooldown: 0
  })
  const [skillTwo, setSkillTwo] = useState({
    skill_name: "",
    skill_effect: "",
    skill_cooldown: 0
  })
  const [skillThree, setSkillThree] = useState({
    skill_name: "",
    skill_effect: "",
    skill_cooldown: 0
  })
  const [skillFour, setSkillFour] = useState({
    skill_name: "",
    skill_effect: "",
    skill_cooldown: 0
  })

  useEffect(() => {
    // will need to update all the states on every render
    // will need to fetch skills on initial load (may be able to do this using a serializer to reduce the number of fetches)
    // 
  },)
  return (
    <>
      <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.height} spacing={0}>
        <Grid item className={classes.backgroundTwo} xs={12}>
          <Grid container justifyContent="space-around" alignContent="flex-start" alignItems="center" direction="row" className={classes.height} spacing={0}>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <ProgressBar percentage="100" />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <ProgressBar percentage="100" />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>

            </Grid>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={0} style={{ height: '85vh' }}>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img src={Hero} style={{ height: '500px' }} />
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img src={Enemy} style={{ height: '500px', transform: 'scaleX(-1)' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Battle