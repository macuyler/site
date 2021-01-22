import { createUseStyles } from 'react-jss'
import Header from './Header'
import Content from './Content'
import '../assets/css/anims.css'
import '../assets/css/fonts.css'

function Home() {
	const classes = useStyles()
	return (
		<main className={classes.wrapper}>
			<Header />
			<Content />
		</main>
	)
}

const useStyles = createUseStyles({
	wrapper: {
		width: '100%',
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
})

export default Home
