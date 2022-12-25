import ReactGlobeGl from "react-globe.gl";
import earthImage from "../assets/earth_flat_map.jpg";
import { AstroButton, GlobeContainer, Time } from "./styled";
import { useGetIssLocationQuery } from "../services/issApi";

import useTime from "../hooks/useTime";
import Astros from "./Astros";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { astroBoxIsOpen } from "../features/astroSlice";
import { useEffect, useRef } from "react";
import Heading from "./Heading";

const Globe: React.FC = () => {
  const { data, error, isLoading } = useGetIssLocationQuery("iss-now", {
    pollingInterval: 1000,
  });

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.astros.isOpen);

  const { timeNow } = useTime();

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
      <Heading/>
      <Time>{timeNow}</Time>
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
        animateIn={true}
      />
      {conditionalView}
      <AstroButton onClick={() => dispatch(astroBoxIsOpen())}>
        Who's in Space?
      </AstroButton>
    </GlobeContainer>
  );
};

export default Globe;
