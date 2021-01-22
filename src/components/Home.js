import { createUseStyles } from 'react-jss'
import '../assets/css/anims.css'
import '../assets/css/fonts.css'

function Home() {
	const classes = useStyles()
	return (
		<div className={classes.wrapper}>
			<div className={classes.slider} />
			<h1>Macuyler Dunn</h1>
			<div className={classes.next}>
				<h2>a software developer</h2>
			</div>
		</div>
	)
}

/**
 * Ideas:
 * After flicker, header slides up from centers and the rest of the page
 * gets animated into veiw.
 * Content:
 * Macuyler Dunn
 * a software developer
 * social links
 * some type of protfolio
 * what I'm reading
 * maybe a cool quote?
 */

const useStyles = createUseStyles({
  wrapper: {
		width: '100%',
		height: '100vh',
		justifyContent: 'flex-start',
		boxSizing: 'border-box',
		padding: '20px 10px',
		animation: 'fadeIn 300ms ease',
		'& h1': {
			color: '#fafafa',
			fontSize: '5rem',
			margin: 0,
			fontFamily: "'Audiowide', cursive",
			animation: 'flicker 1s ease',
			textShadow: '0px 2px 12px rgba(200, 200, 200, 0.6)',
		},
	},
	slider: {
		height: '0',
		animation: 'slideUp 1.8s ease-out',
	},
	next: {
		animation: 'fadeInNext 2s ease-out',
		'& h2': {
			color: '#fff',
			fontSize: '3.8rem',
			fontFamily: "'Audiowide', cursive",
			margin: 0,
			textShadow: '0px 2px 10px rgba(200, 200, 200, 0.6)',
			animation: 'slideDown 800ms ease 1.2s',
		},
	},
})

export default Home
