import ReactGlobeGl from "react-globe.gl";
import earthImage from "../../assets/earth.jpg";
import { AstroButton, GlobeContainer } from "../styled";
import { useGetIssLocationQuery } from "../../services/issApi";

import Astros from "../Astros/Astros";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { astroBoxIsOpen } from "../../features/astroSlice";
import { useEffect, useRef } from "react";
import Heading from "../Heading/Heading";
import TimeNow from "../TimeNow/TimeNow";
import Location from "../Location/Location";

const Globe = () => {
  const { data } = useGetIssLocationQuery("iss-now", {
    pollingInterval: 1000,
  });

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.astros.isOpen);

  const issMarker = [
    {
      lat: data?.iss_position.latitude,
      lng: data?.iss_position.longitude,
    },
  ];

  const globeEl = useRef();

  useEffect(() => {
    const globe: any = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.3;
      globe.pointOfView({ altitude: 3 }, 5000);
    }
  }, []);

  const labelSettings = {
    color: () => "orange",
    text: () => "ISS",
    label: () => "28000km/h",
    radius: 3,
  };

  const conditionalView = isOpen && <Astros />;

  return (
    <GlobeContainer>
      <Heading />
      <Location
        lat={data?.iss_position.latitude}
        lng={data?.iss_position.longitude}
      />
      <TimeNow />
      <ReactGlobeGl
        ref={globeEl}
        labelsTransitionDuration={0}
        labelColor={labelSettings.color}
        labelsData={issMarker}
        labelDotRadius={labelSettings.radius}
        labelText={labelSettings.text}
        labelAltitude={0.1}
        labelSize={3}
        labelLabel={labelSettings.label}
        globeImageUrl={earthImage}
        showAtmosphere={true}
        animateIn={false}
      />
      {conditionalView}
      <AstroButton onClick={() => dispatch(astroBoxIsOpen())}>
        Who's in Space?
      </AstroButton>
    </GlobeContainer>
  );
};

export default Globe;
