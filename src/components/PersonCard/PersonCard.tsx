import { AstroFlag, AstroImage, PersonCardContainer } from "../styled";

import astroNone from '../../assets/astro.jpg'
import Spinner from "../Spinner/Spinner";
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

  const conditionalImage = astro.biophoto ? <AstroImage src={astro.biophoto} onError={imageOnErrorHandler} alt="astro" /> : <Spinner/>
  
  return (
    <PersonCardContainer>
      <AstroFlag src={astro.countryflag}/>
      {conditionalImage}
      <div>{astro.name}</div>
      <div>{astro.title}</div>
      <div>{astro.location === 'International Space Station' ? 'ISS' : astro.location}</div>
    </PersonCardContainer>
  );
};

export default PersonCard;
