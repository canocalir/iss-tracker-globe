import { LocationMain } from "../styled"

type Props = {
    lat: number | undefined,
    lng: number | undefined
}

const Location = ({lat, lng }: Props) => {
  return (
    <LocationMain>
        <p style={{margin: 0}}>Lat: {lat}</p>
        <p style={{margin: 0}}>Lng: {lng}</p>
    </LocationMain>
  )
}

export default Location