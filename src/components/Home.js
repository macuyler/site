import { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import "../assets/css/anims.css"
import "../assets/css/fonts.css"

function Home() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => setTimeout(() => setScroll(true), 2200), [setScroll])

  const classes = useStyles()
  return (
    <main
      className={classes.wrapper}
      style={scroll ? null : { height: "100vh" }}
    >
      <Header />
      <Content />
      <Footer />
    </main>
  )
}

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default Home
