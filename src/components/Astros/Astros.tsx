import { useAppDispatch } from "../../app/hooks";
import { astroBoxIsOpen } from "../../features/astroSlice";
import useInterval from "../../hooks/useInterval";
import { useGetPeopleInSpaceQuery } from "../../services/peopleInSpaceApi";

import PersonCard from "../PersonCard/PersonCard";
import Spinner from "../Spinner/Spinner";
import {
  AstroClose,
  AstroContainer,
  AstroInner,
  PeopleContainer,
} from "../styled";

const Astros = () => {
  const { data, isLoading } = useGetPeopleInSpaceQuery("peopleinspace");

  const dispatch = useAppDispatch();

  const astroCount = data?.number;

  const { value } = useInterval(astroCount!);

  const astroMapping = data?.people?.map((astro, index) => {
    return <PersonCard key={index} astro={astro} />;
  });

const slideConditional = value >= 2000 ? 0 : value

  return (
    <AstroContainer>
      <AstroInner>
        <AstroClose onClick={() => dispatch(astroBoxIsOpen())}>X</AstroClose>
        <PeopleContainer slide={slideConditional}>
          {isLoading ? <Spinner/> : astroMapping}
        </PeopleContainer>
      </AstroInner>
    </AstroContainer>
  );
};

export default Astros;
