import pandem from "../assets/img/project1.png"
import files from "../assets/img/project2.png"
import lib from "../assets/img/project3.png"
import prof from "../assets/img/profile.jpg"

import fb from "../assets/icons/facebook.svg"
import gh from "../assets/icons/github.svg"
import ig from "../assets/icons/instagram.svg"
import li from "../assets/icons/linkedin.svg"
import tw from "../assets/icons/twitter.svg"
import uw from "../assets/icons/upwork.png"

const images = { pandem, files, lib, prof, fb, gh, ig, li, tw, uw }

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
