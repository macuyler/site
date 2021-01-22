import { createUseStyles } from 'react-jss'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import '../assets/css/anims.css'
import '../assets/css/fonts.css'

function Home() {
	const classes = useStyles()
	return (
		<main className={classes.wrapper}>
			<Header />
			<Content />
			<Footer />
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
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})

export default Home
