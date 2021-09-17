import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import useStyles from './Styles'
import ProgressBar from './ProgressBar'
import SkillCard from './SkillCard'
import End from './End'

function Battle({ user, selectedChar, enemy, setSelectedChar, setEnemy }) {
  const classes = useStyles()

  const [battle, setBattle] = useState()
  const [turn, setTurn] = useState()
  const [startBattle, setStartBattle] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/battles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "player_character_id": selectedChar.id,
        "non_player_character_id": enemy.id
      })
    }).then(r => r.json()).then(setBattle)
  }, [])

  function endOfBattle() {
    fetch(`http://localhost:3000/battles/${battle.id}`, {
      method: 'DELETE',
    })
  }

  const enemyHP = enemy.current_hp
  const charHP = selectedChar.current_hp
  if (enemyHP <= 0 || charHP <= 0) {
    return (
      <>
        {endOfBattle()}
        <End user={user} />
      </>
    )
  }
  return (
    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" spacing={0}>
      <Grid item className={classes.backgroundTwo} xs>
        <Grid container justifyContent="space-between" alignContent="flex-start" alignItems="flex-start" direction="row" spacing={0} >

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <ProgressBar percentage={selectedChar.current_hp} />
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <ProgressBar percentage={enemy ? enemy.current_hp : ""} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {startBattle ?
              <div className={classes.battleAlert}>
                <Typography variant="h3" color="secondary">
                  {(battle?.turn % 2 === 0) ? `${battle?.player_character.character_name} attacks: "${battle?.attack_type}!"` : `${battle?.non_player_character.character_name} attacks: "${battle?.attack_type}!"`}
                </Typography>
              </div>
              : null}
          </Grid>
          <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={0}>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <img src={selectedChar.image_url} style={{ height: '350px' }} />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <img src={enemy ? enemy.image_url : ""} style={{ height: '350px', transform: 'scaleX(-1)' }} />
            </Grid>
          </Grid>

          <Grid container direction="row" spacing={1} justifyContent="center" alignContent="center" alignItems="center" className={classes.skillsContainer} >
            {selectedChar.skills.map(skill => <SkillCard battle={battle} skill={skill} setBattle={setBattle} setSelectedChar={setSelectedChar} setEnemy={setEnemy} enemy={enemy} setStartBattle={setStartBattle} />)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Battle