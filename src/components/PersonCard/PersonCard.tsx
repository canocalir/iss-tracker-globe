import { AstroImage, PersonCardContainer } from "../styled";
import astroNone from '../../assets/astro.jpg'
type Person = {
  astro:{
    name: string;
    biophoto: string;
    biophotowidth: number;
    biophotoheight: number;
    country: string;
    countryflag: string;
    launchdate: string;
    careerdays: number;
    title: string;
    location: string;
    bio: string;
    biolink: string;
    twitter: string;
  }
}

const PersonCard = ({ astro }: Person ) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = astroNone;
   
  };
  return (
    <PersonCardContainer>
      <AstroImage src={astro.biophoto} onError={imageOnErrorHandler} alt="astro" />
      <div>{astro.name}</div>
      <div>{astro.location}</div>
    </PersonCardContainer>
  );
};

export default PersonCard;
