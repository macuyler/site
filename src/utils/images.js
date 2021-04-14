import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import project3 from "../assets/img/project3.png"
import prof from "../assets/img/profile.jpg"

import bc from "../assets/icons/bugcrowd.png"
import gh from "../assets/icons/github.svg"
import h1 from "../assets/icons/hackerone.png"
import li from "../assets/icons/linkedin.svg"
import tw from "../assets/icons/twitter.svg"
import yt from "../assets/icons/youtube.svg"

const images = { project1, project2, project3, prof, bc, gh, yt, li, tw, h1 }

export const LoadImages = () => {
  return (
    <div style={{ display: "none" }}>
      {Object.entries(images).map(([key, value]) => (
        <img src={value} alt={key} key={key} />
      ))}
    </div>
  )
}

export default images
