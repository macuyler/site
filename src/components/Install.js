import { useState, useEffect, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import lines from '../utils/install.js'

const installLines = lines.split('\n').reverse() 

function Install({ done }) {
	const [lines, setLines] = useState([])

	const readLine = useCallback((ls) => {
		const fastForward = 15;
		const newLs = [...ls]
		for (let i = 0; i < fastForward; i++) {
			const l = installLines.pop()
			newLs.push(l)
		}
		setLines(newLs)
		if (installLines.length > 0)
			setTimeout(() => readLine(newLs), 5)
		else
			done()
	}, [setLines, done])

	useEffect(() => {
		readLine([])
	}, [readLine])

	const classes = useStyles()

	return (
		<div className={classes.wrapper}>
			{lines.map((l, i) => <code key={`l${i}`}>{l}</code>)}
		</div>
	)
}

const useStyles = createUseStyles({
	wrapper: {
		width: '100%',
		height: '100vh',
		overflow: 'hidden',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		'& code': {
			color: '#ddd',
		},
	},
})

export default Install
