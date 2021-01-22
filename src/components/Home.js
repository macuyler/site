import { createUseStyles } from 'react-jss'
import '../assets/css/anims.css'
import '../assets/css/fonts.css'

function Home() {
	const classes = useStyles()
	return (
		<div className={classes.wrapper}>
			<h1>Macuyler Dunn</h1>
		</div>
	)
}

const useStyles = createUseStyles({
  wrapper: {
		width: '100%',
		height: '100vh',
		animation: 'fadeIn 300ms ease',
		'& header': {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			boxSizing: 'border-box',
			padding: '20px 50px',
			justifyContent: 'flex-start',
			'& img': {
				width: '100px',
				borderRadius: '100%',
				border: '2px solid rgba(255, 255, 255, 0.3)',
				marginRight: 40,
			},
		},
		'& h1': {
			color: '#fafafa',
			fontSize: '5rem',
			margin: 0,
			fontFamily: "'Audiowide', cursive",
			animation: 'flicker 1s ease',
			textShadow: '0px 2px 12px rgba(200, 200, 200, 0.6)',
		},
	},
})

export default Home
