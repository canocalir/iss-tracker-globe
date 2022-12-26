import useTime from "../../hooks/useTime";
import { Time } from "../styled";

const TimeNow = () => {
    const { timeNow } = useTime();
  return (
    <Time>{timeNow}</Time>
  )
}

export default TimeNow