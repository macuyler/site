import { useState, useEffect, useCallback } from "react"
import { createUseStyles } from "react-jss"
import { bp } from "../utils/helpers.js"
import lines from "../utils/install.js"

const installLines = lines.split("\n").reverse()

function Install({ done }) {
  const [lines, setLines] = useState([])

  let pt
  const readLine = useCallback(
    (ls) => {
      const fastForward = pt !== null ? 2 * (Date.now() - pt) : 0
      pt = Date.now()
      const newLs = [...ls]
      for (let i = 0; i < fastForward; i++) {
        const l = installLines.pop()
        newLs.push(l)
      }
      if (newLs.length > 300) newLs.splice(0, fastForward)
      setLines(newLs)
      if (installLines.length > 0) requestAnimationFrame(() => readLine(newLs))
      else done()
    },
    [setLines, done]
  )

  useEffect(() => {
    readLine([])
  }, [readLine])

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      {lines.map((l, i) => (
        <code key={`l${i}`}>{l}</code>
      ))}
    </div>
  )
}

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    "& code": {
      color: "#ddd",
      [bp(400)]: {
        fontSize: "0.8rem",
      },
    },
  },
})

export default Install
