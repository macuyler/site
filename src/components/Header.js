import { createUseStyles } from 'react-jss'
import prof from '../assets/img/profile.jpg'

function Header() {
	const classes = useStyles()
	return (
		<header className={classes.header}>
			<img src={prof} alt="profile" />
			<div className={classes.title}>
				<div className={classes.slider} />
				<h1>Macuyler Dunn</h1>
				<div className={classes.next}>
					<h2>a software developer</h2>
				</div>
			</div>
		</header>
	)
}

const useStyles = createUseStyles({
	header: {
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
			animation: 'enterLogo 2s ease',
		},
	},
  title: {
		width: '100%',
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
			animation: 'slideDown 1s ease 1s',
		},
	},
})

export default Header