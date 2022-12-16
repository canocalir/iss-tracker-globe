import ReactGlobeGl from "react-globe.gl"
import earthImage from "../assets/earth_flat_map.jpg"

const Globe = () => {
  return (
    <>
    <ReactGlobeGl globeImageUrl={earthImage} showAtmosphere={true}/>
    </>
  )
}

export default Globe