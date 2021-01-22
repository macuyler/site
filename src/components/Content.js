import { createUseStyles } from 'react-jss'

/**
 * Content:
 * social links
 * some type of protfolio
 * what I'm reading
 * maybe a cool quote?
 */

function Content() {
	const classes = useStyles()
	return (
		<div className={classes.content}>
			<h3>PROJECTS</h3>
			<div className={classes.row}>
				<div className={classes.project}></div>
				<div className={classes.project}></div>
				<div className={classes.project}></div>
			</div>
		</div>
	)
}

const useStyles = createUseStyles({
	content: {
		animation: 'fadeInNext 2.5s ease',
		color: '#fff',
		'& h3': {
			fontFamily: "'Bungee Hairline', sans-serif",
			fontSize: '3.5rem',
			margin: 0,
		},
	},
	row: {
		flexDirection: 'row',
	},
	project: {
		display: 'block',
		width: 300,
		height: 180,
		background: '#a4a4a4',
		margin: 10,
	},
})

export default Content
