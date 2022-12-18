import ReactGlobeGl from "react-globe.gl";
import earthImage from "../assets/earth_flat_map.jpg";
import { GlobeContainer, Navbar } from "./styled";
import { useGetIssLocationQuery } from "../services/issApi";

import useTime from "../hooks/useTime";

const Globe = () => {
  
  const {data, error, isLoading} = useGetIssLocationQuery('iss-now',{
    pollingInterval: 2000,
  })
  const {timeNow} = useTime();

  const issMarker = [{
    lat: data?.iss_position.latitude,
    lng: data?.iss_position.longitude
  }]

  return (
    <GlobeContainer>
      <Navbar>
        <h1>Realtime ISS Location Tracker</h1>
        <h3>
          {timeNow}
        </h3>
      </Navbar>
      <ReactGlobeGl labelsTransitionDuration={0} labelColor={() => 'orange'} labelsData={issMarker} labelDotRadius={2} labelText={() => 'ISS'} labelAltitude={0.1} labelSize={3}
      labelLabel={() => '28000km/h'}
      globeImageUrl={earthImage} showAtmosphere={true} />
    </GlobeContainer>
  );
};

export default Globe;
