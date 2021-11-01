import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ReactPlayer from 'react-player'

import useStyles from './Styles'
import ProgressBar from './ProgressBar'
import SkillCard from './SkillCard'
import End from './End'

function Battle({ user, selectedChar, enemy, setSelectedChar, setEnemy }) {
	const classes = useStyles()
	const history = useHistory()
	const [battle, setBattle] = useState()
	const [turn, setTurn] = useState()
	const [startBattle, setStartBattle] = useState(false)
	const [heroImage, setHeroImage] = useState(
		`${process.env.PUBLIC_URL}/animated/${selectedChar.character_name
			?.toString()
			.toLowerCase()}-idle.png`
	)
	const [enemyImage, setEnemyImage] = useState(
		`${process.env.PUBLIC_URL}/animated/${enemy.character_name
			?.toString()
			.toLowerCase()}-idle.png`
	)

	const delay = (ms) => new Promise((res) => setTimeout(res, ms))
	const enemyHP = enemy.current_hp
	const charHP = selectedChar.current_hp

	useEffect(() => {
		if (charHP === 0) {
			async function hpCheck() {
				setHeroImage(
					`${process.env.PUBLIC_URL}/animated/${selectedChar.character_name
						?.toString()
						.toLowerCase()}-die.png`
				)
				await delay(5000)
				history.push('/account')
			}
			hpCheck()
		}

		if (enemyHP === 0) {
			async function enemyCheck() {
				setEnemyImage(
					`${process.env.PUBLIC_URL}/animated/${enemy.character_name
						?.toString()
						.toLowerCase()}-die.png`
				)
				await delay(5000)
				history.push('/account')
			}
			enemyCheck()
		}
	}, [charHP, enemyHP])

	useEffect(() => {
		fetch('http://localhost:3000/battles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				player_character_id: selectedChar.id,
				non_player_character_id: enemy.id,
			}),
		})
			.then((r) => r.json())
			.then(setBattle)
	}, [])

	function endOfBattle() {
		fetch(`http://localhost:3000/battles/${battle.id}`, {
			method: 'DELETE',
		})
	}

	// const deathImages = async () => {
	//   if (enemyHP <= 0) {
	//     setEnemyImage(`${process.env.PUBLIC_URL}/animated/${enemy.character_name?.toString().toLowerCase()}-die.png`)
	//   } else if (charHP <= 0) {
	//     setHeroImage(`${process.env.PUBLIC_URL}/animated/${selectedChar.character_name?.toString().toLowerCase()}-die.png`)
	//   }

	//   await delay(5000)
	//   endOfBattle()
	//   history.push('/account')
	// }

	// if (enemyHP <= 0 || charHP <= 0) {
	//   return (
	//     <>
	//       {endOfBattle()}
	//       {history.push('/account')}
	//     </>
	//   )
	// }
	return (
		<Grid
			container
			justifyContent='center'
			alignContent='center'
			alignItems='center'
			direction='column'
			spacing={0}
		>
			<div style={{ height: '0px', top: 0 }}>
				<ReactPlayer
					url={`${process.env.PUBLIC_URL}/battle-music.mp3`}
					playing='true'
				/>
			</div>
			<Grid item className={classes.backgroundTwo} xs>
				<Grid
					container
					display='flex'
					justifyContent='space-around'
					alignContent='center'
					alignItems='center'
					direction='row'
					spacing={0}
				>
					<Grid item xs={3} style={{ textAlign: 'center' }}>
						<ProgressBar percentage={selectedChar.current_hp} />
					</Grid>

					<Grid item xs={3} style={{ textAlign: 'center' }}>
						<ProgressBar percentage={enemy ? enemy.current_hp : ''} />
					</Grid>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						{startBattle ? (
							<div className={classes.battleAlert}>
								<Typography variant='h3' color='secondary'>
									{battle?.turn % 2 === 0
										? `${battle?.player_character.character_name} attacks: "${battle?.attack_type}!"`
										: `${battle?.non_player_character.character_name} attacks: "${battle?.attack_type}!"`}
								</Typography>
							</div>
						) : null}
					</Grid>
					<Grid
						container
						justifyContent='center'
						alignContent='center'
						alignItems='center'
						direction='row'
						spacing={0}
					>
						<Grid
							item
							xs={6}
							style={{ textAlign: 'center', marginTop: '200px' }}
							sx={{ mt: 10 }}
						>
							<img src={heroImage} style={{ height: '450px' }} />
						</Grid>
						<Grid
							item
							xs={6}
							style={{ textAlign: 'center', marginTop: '200px' }}
						>
							<img
								src={enemy ? enemyImage : ''}
								style={{ height: '450px', transform: 'scaleX(-1)' }}
							/>
						</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						spacing={1}
						justifyContent='center'
						alignContent='center'
						alignItems='center'
						className={classes.skillsContainer}
					>
						{selectedChar.skills.map((skill) => (
							<SkillCard
								battle={battle}
								skill={skill}
								setBattle={setBattle}
								selectedChar={selectedChar}
								setSelectedChar={setSelectedChar}
								setEnemy={setEnemy}
								enemy={enemy}
								setStartBattle={setStartBattle}
								setHeroImage={setHeroImage}
								setEnemyImage={setEnemyImage}
							/>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Battle
