import { createUseStyles } from "react-jss"
import { bp } from "../utils/helpers"
import images from "../utils/images"

function Line({ text, href, code, img }) {
  let out = text
  if (code) out = <code>{out}</code>
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
        <div className={classes.links}>
          <Line
            text="#!/bin/bash"
            code
            href="https://github.com/macuyler/config"
          />
          <Line text="macuyler@gmail.com" />
          <Line text="© 2021 Macuyler Dunn" />
        </div>
        <div className={classes.links}>
          <Line
            text="GitHub"
            href="https://github.com/macuyler"
            img={images.gh}
          />
          <Line
            text="Bugcrowd"
            href="https://bugcrowd.com/macuyler"
            img={images.bc}
          />
          <Line
            text="Hackerone"
            href="https://hackerone.com/macuyler"
            img={images.h1}
          />
          <Line
            text="Twitter"
            href="https://twitter.com/macuyler"
            img={images.tw}
          />
          <Line
            text="LinkedIn"
            href="https://www.linkedin.com/in/macuyler"
            img={images.li}
          />
          <Line
            text="YouTube"
            href="https://www.youtube.com/channel/UCEBOU9EktLcAmVAD3p1bRZg"
            img={images.yt}
          />
        </div>
      </div>
    </footer>
  )
}

const useStyles = createUseStyles({
  footer: {
    width: "100%",
    height: 140,
    boxSizing: "border-box",
    padding: "12px 30px 10px 30px",
    borderTop: "1px solid rgba(200, 200, 200, 0.1)",
    animation: "fadeInNext 2.5s ease",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    [bp(550)]: { height: "auto" },
    [bp(380)]: { padding: "12px 0 10px" },
  },
  container: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    [bp(1300)]: {
      width: "100%",
      maxWidth: "800px",
      padding: "0 20px",
    },
    [bp(550)]: { flexDirection: "column" },
  },
  links: {
    flexGrow: 1,
    width: "100%",
    height: 120,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "& img": {
      width: 25,
      marginRight: 8,
      borderRadius: "100%",
    },
    "& p": {
      margin: "6px",
      marginRight: "12px",
      display: "flex",
      alignItems: "center",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
    [bp(380)]: { height: "auto" },
  },
})

export default Footer
