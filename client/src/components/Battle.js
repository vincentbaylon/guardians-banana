import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './Styles'
import ProgressBar from './ProgressBar'
import SkillCard from './SkillCard'
import End from './End'

function Battle({ user, selectedChar, enemy, setSelectedChar, setEnemy }) {
  const classes = useStyles()

  const [battle, setBattle] = useState()
  const [turn, setTurn] = useState()

  useEffect(() => {
        fetch("http://localhost:3000/battles", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            "player_character_id" : selectedChar.id,
            "non_player_character_id" : enemy.id
          })
        }).then(r => r.json()).then(setBattle)
  }, [])

  function endOfBattle() {
    fetch(`http://localhost:3000/battles/${battle.id}`,{
      method: 'DELETE',
    })
  }
  console.log(enemy)
  console.log(selectedChar)
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
          <Grid item className={classes.backgroundTwo} xs={12}>
            <Grid container justifyContent="space-around" alignContent="flex-start" alignItems="center" direction="row" spacing={0}>
              <Grid item xs={3} style={{ textAlign: "center", margin: '100px'}}>
                <ProgressBar percentage={selectedChar.current_hp} />
              </Grid>
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <ProgressBar percentage={enemy ? enemy.current_hp : ""} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
  
              </Grid>
              1<Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={0}>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <img src={selectedChar.image_url} style={{ height: '500px'}} />
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <img src={enemy ? enemy.image_url : ""} style={{ height: '500px', transform: 'scaleX(-1)'}} />
                </Grid>
              </Grid>
  
              <Grid container direction="row" spacing={1} justifyContent="center" alignContent="center" alignItems="center" >
                  {selectedChar.skills.map(skill  => <SkillCard battle={battle} skill={skill} setBattle={setBattle} setSelectedChar={setSelectedChar} setEnemy={setEnemy}/>)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default Battle