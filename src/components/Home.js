import { createUseStyles } from 'react-jss'
import prof from '../assets/img/profile.jpg'
import '../assets/css/anims.css'
import '../assets/css/fonts.css'

function Home() {
	const classes = useStyles()
	return (
		<main className={classes.wrapper}>
			<img src={prof} alt="profile" />
			<div className={classes.content}>
				<div className={classes.slider} />
				<h1>Macuyler Dunn</h1>
				<div className={classes.next}>
					<h2>a software developer</h2>
				</div>
			</div>
		</main>
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
		boxSizing: 'border-box',
		padding: '20px 10px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		'& img': {
			width: 180,
			borderRadius: '100%',
			marginTop: 10,
			marginRight: 30,
			marginLeft: -210,
			boxSizing: 'border-box',
			border: '2px solid rgba(200, 200, 200, 0.3)',
			boxShadow: '0px 4px 18px 10px rgba(200, 200, 200, 0.1)',
			animation: 'enterLogo 2.2s ease',
		},
	},
  content: {
		width: '100%',
		height: '100vh',
		justifyContent: 'flex-start',
		animation: 'fadeIn 300ms ease',
		'& main': {
			height: '100%',
		},
		'& h1': {
			color: '#fafafa',
			fontSize: '5.6rem',
			margin: 0,
			fontFamily: "'Audiowide', sans-serif",
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
			fontFamily: "'Audiowide', sans-serif",
			margin: 0,
			textShadow: '0px 2px 10px rgba(200, 200, 200, 0.6)',
			animation: 'slideDown 800ms ease 1.2s',
		},
	},
})

export default Home
