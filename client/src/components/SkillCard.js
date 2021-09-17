import { useState, useEffect } from 'react'

import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core'

import skill1 from '../assets/2.png'
import skill2 from '../assets/18.png'
import skill3 from '../assets/30.png'
import skill4 from '../assets/33.png'
import skill5 from '../assets/47.png'

function SkillCard({ battle, skill, setBattle, setSelectedChar, setEnemy, enemy, setStartBattle }) {
  const [cooldown, setCooldown] = useState(0)

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleAction = async () => {
    setStartBattle(true)
    const random = Math.floor(Math.random() * enemy.skills.length)
    console.log(random)
    console.log(enemy.skills[random].skill_id)

    fetch(`http://localhost:3000/battles/${battle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "skill_id": skill.skill_id
      })
    }).then(r => r.json()).then((data) => {
      console.log(data)
      console.log(data.non_player_character)
      setBattle(data)
      setSelectedChar(data.player_character)
      setEnemy(data.non_player_character)
    })

    await delay(3000)

    fetch(`http://localhost:3000/battles/${battle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "skill_id": enemy.skills[random].skill_id
      })
    }).then(r => r.json()).then((data) => {
      console.log(data)
      setBattle(data)
      setSelectedChar(data.player_character)
      setEnemy(data.non_player_character)
    })
  }

  return (
    <Grid item xs={3} style={{ textAlign: "center" }}>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ width: '145px', background: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CardContent style={{ align: "center" }}>
            <img src={skill3} style={{ height: '150px' }} onClick={handleAction} />
          </CardContent>
        </Card>
      </Box>
    </Grid>

  )
}

export default SkillCard