import { createUseStyles } from "react-jss"
import { bp } from "../utils/helpers"
import images from "../utils/images"

function Project({ img, title, desc, href }) {
  const classes = useStyles()
  return (
    <div className={classes.project}>
      <div style={{ backgroundImage: `url(${img})` }} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href={href} target="_blank" rel="noreferrer noopener">
        Check it Out
      </a>
    </div>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <h3>PROJECTS</h3>
      <div className={classes.row}>
        <Project
          img={images.project1}
          title="Pandemonium 2020"
          desc="This is a fun new game, where you save people to get a high score!"
          href="https://pandemonium2020.app"
        />
        <Project
          img={images.project2}
          title="Play Suipi"
          desc="This the first and only online multiplayer version of your favorite Samoan card game!"
          href="https://playsuipi.com"
        />
        <Project
          img={images.project3}
          title="Code Contest"
          desc="This is a competitive event for kids interested in creating their own video game and learning to code!"
          href="https://codecontest.org"
        />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  content: {
    animation: "fadeInNext 2.5s ease",
    color: "#fff",
    margin: "10px 0 25px 0",
    "& h3": {
      fontFamily: "'Bungee Hairline', sans-serif",
      fontSize: "3.5rem",
      margin: 0,
      [bp(350)]: { fontSize: "2.8rem" },
    },
  },
  row: {
    flexDirection: "row",
    margin: "10px 0",
    [bp(1300)]: {
      flexDirection: "column",
    },
  },
  project: {
    width: 400,
    borderRadius: "5px",
    border: "2px solid rgba(200, 200, 200, 0.3)",
    alignItems: "flex-start",
    margin: "0 10px",
    "& div": {
      width: "100%",
      height: 50,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      borderBottom: "2px solid rgba(200, 200, 200, 0.3)",
      borderRadius: "4px 4px 0 0",
    },
    "& h4": {
      margin: "10px 12px",
      fontSize: "2rem",
      [bp(350)]: { fontSize: "1.5rem" },
    },
    "& p": {
      margin: "0 12px 10px 12px",
    },
    "& a": {
      color: "#fafafa",
      textDecoration: "none",
      margin: "5px 0 10px 0",
      alignSelf: "center",
      padding: "5px 15px",
      border: "1px solid hsla(0, 0%, 100%, 0.23)",
      borderRadius: 4,
      tranition: "all 250ms ease",
    },
    "& a:hover": {
      backgroundColor: "hsla(0, 0%, 100%, 0.08)",
    },
    [bp(1300)]: {
      margin: "10px 0",
    },
    [bp(430)]: {
      width: "95%",
    },
  },
})

export default Content
