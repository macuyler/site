import { createUseStyles } from 'react-jss'
import fb from '../assets/icons/facebook.svg'
import gh from '../assets/icons/github.svg'
import ig from '../assets/icons/instagram.svg'
import li from '../assets/icons/linkedin.svg'
import tw from '../assets/icons/twitter.svg'
import uw from '../assets/icons/upwork.png'

function Line({ text, href, code, img }) {
	let out = text
	if (code)
		out = <code>{out}</code>
	if (href) {
		out = (
			<a href={href} target="_blank" rel="noreferrer noopener">
				{out}
			</a>
		)
	}
	if (img) {
		out = (
			<>
				<img src={img} alt={text} />
				{out}
			</>
		)
	}
	return <p>{out}</p>
}

function Footer() {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<Line text="#!/bin/bash" code href="https://github.com/macuyler/my-config" />
				<Line text="macuyler@gmail.com" />
				<Line text="© 2021 Macuyler Dunn" />
				<Line text="GitHub" href="https://github.com/macuyler" img={gh} />
				<Line text="LinkedIn" href="https://www.linkedin.com/in/macuyler" img={li} />
				<Line text="UpWork" href="https://www.upwork.com/freelancers/~01c3592ca6bd1406ae" img={uw} />
				<Line text="Twitter" href="https://twitter.com/macuyler" img={tw} />
				<Line text="Instagram" href="https://www.instagram.com/macuyler" img={ig} />
				<Line text="Facebook" href="https://www.facebook.com/macuyler" img={fb} />
			</div>
		</footer>
	)
}

const useStyles = createUseStyles({
	footer: {
		width: '100%',
		height: 140,
		boxSizing: 'border-box',
		padding: '12px 30px 10px 30px',
		borderTop: '1px solid rgba(200, 200, 200, 0.1)',
		animation: 'fadeInNext 2.5s ease',
		color: '#fff',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		width: '50%',
		height: '100%',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		'& img': {
			width: 25,
			marginRight: 8,
			borderRadius: '100%',
		},
		'& p': {
			margin: '6px 0',
			display: 'flex',
			alignItems: 'center',
		},
		'& a': {
			color: '#fff',
			textDecoration: 'none',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
})

export default Footer
