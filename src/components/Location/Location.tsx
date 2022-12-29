import { LocationMain } from "../styled";

type Props = {
  spd: string | undefined;
  lat: number | undefined;
  lng: number | undefined;
};

const Location = ({ lat, lng, spd }: Props) => {
  const initialData = {
    lat: 'loading',
    lng: 'loading',
    spd: 'loading'
  }
  return (
    <LocationMain>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Lat:</span> {lat || initialData.lat}
      </p>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Lng:</span> {lng || initialData.lng}
      </p>
      <p style={{ margin: 0 }}>
        <span style={{ color: "orange" }}>Vel:</span> {spd === 'undefined' ? initialData.spd : spd + " km/h"}
      </p>
    </LocationMain>
  );
};

export default Location;
