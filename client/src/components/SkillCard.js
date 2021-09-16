import {useState, useEffect } from 'react'

import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core'

import skill1 from '../assets/2.png'
// import skill2 from '../assets/18.png'
// import skill3 from '../assets/30.png'
// import skill4 from '../assets/33.png'
// import skill5 from '../assets/47.png'

function SkillCard({ battle, skill, setBattle, setSelectedChar, setEnemy}){
  const [ cooldown, setCooldown] = useState(0)

  function handleAction(){
    fetch(`http://localhost:3000/battles/${battle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "skill_id" : skill.skill_id
      })
    }).then(r => r.json()).then((data) => {
      setBattle(data)
      setSelectedChar(data.player_character)
      setEnemy(data.non_player_character)
    })
  }

  return(
    <Grid item xs={3}>
      <Box>
        <Card variant="outlined" style={{width: '145px', background: 'rgba(0,0,0,0)'}}>
          <CardContent>
            <img src={skill1} style={{ height: '100px'}} onClick={handleAction}/>
          </CardContent>
        </Card>
      </Box>
    </Grid>
    
  )
}

export default SkillCard