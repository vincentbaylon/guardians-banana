import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

import useStyles from './Styles'
import ProgressBar from './ProgressBar'

import skill1 from '../assets/2.png'
import skill2 from '../assets/18.png'
import skill3 from '../assets/30.png'
import skill4 from '../assets/33.png'
import skill5 from '../assets/47.png'

function Battle({ user, selectedChar }) {
  const classes = useStyles()
  const [characters, setCharacters] = useState([])
  const [enemy, setEnemy] = useState()
  const [heroHP, setHeroHP] = useState(user.max_hp)
  const [enemyHP, setEnemyHP] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(res => res.json())
      .then(data => {
        let randomEnemy = data[Math.floor(Math.random() * data.length)]
        setEnemy(randomEnemy)
        setEnemyHP(randomEnemy.max_hp)
      })
  }, [])

  return (
    <>
      <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.height} spacing={0}>
        <Grid item className={classes.backgroundTwo} xs={12}>
          <Grid container justifyContent="space-around" alignContent="flex-start" alignItems="center" direction="row" className={classes.height} spacing={0}>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <ProgressBar percentage={heroHP} />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <ProgressBar percentage={enemyHP ? enemyHP : ""} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>

            </Grid>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={0} style={{ height: '85vh' }}>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img src={selectedChar.image_url} style={{ height: '500px' }} />
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img src={enemy ? enemy.image_url : ""} style={{ height: '500px', transform: 'scaleX(-1)' }} />
              </Grid>
            </Grid>

            <Grid container spacing={1} justifyContent="center" alignContent="center" alignItems="center">
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <img src={skill1} style={{ height: '100px' }} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <img src={skill1} style={{ height: '100px' }} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <img src={skill1} style={{ height: '100px' }} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <img src={skill1} style={{ height: '100px' }} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <img src={skill1} style={{ height: '100px' }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Battle