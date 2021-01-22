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
			<p>This is a really cool site!</p>
		</div>
	)
}

const useStyles = createUseStyles({
	content: {
		animation: 'fadeInNext 2.5s ease',
		color: '#fff'
	},
})

export default Content
