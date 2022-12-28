import { LocationMain } from "../styled";

type Props = {
  spd: string | undefined;
  lat: number | undefined;
  lng: number | undefined;
};

const Location = ({ lat, lng, spd }: Props) => {
  return (
    <LocationMain>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Lat:</span> {lat}
      </p>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Lng:</span> {lng}
      </p>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Vel:</span> {spd}
      </p>
    </LocationMain>
  );
};

export default Location;
