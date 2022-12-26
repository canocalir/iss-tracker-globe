import { AstroImage, PersonCardContainer } from "../styled";
import astroImage from "../../assets/astro.jpg";

type Props = {
  astro: {
    name: string;
    craft: string;
  };
};

const PersonCard = ({ astro }: Props) => {
  return (
    <PersonCardContainer>
      <AstroImage src={astroImage} alt="astro" />
      <div>{astro.name}</div>
      <div>{astro.craft}</div>
    </PersonCardContainer>
  );
};

export default PersonCard;
