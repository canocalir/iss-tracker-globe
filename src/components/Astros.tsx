import { useAppDispatch } from "../app/hooks";
import { astroBoxIsOpen } from "../features/astroSlice";
import useInterval from "../hooks/useInterval";
import { useGetPeopleInSpaceQuery } from "../services/issApi";
import PersonCard from "./PersonCard";
import {
  AstroClose,
  AstroContainer,
  AstroInner,
  PeopleContainer,
} from "./styled";

const Astros = () => {
  const { data, isLoading, error } = useGetPeopleInSpaceQuery("astros");

  const dispatch = useAppDispatch();

  const astroCount = data?.number;
  const { value } = useInterval(astroCount!);

  const astroMapping = data?.people?.map((astro, index) => {
    return <PersonCard key={index} astro={astro} />;
  });

  return (
    <AstroContainer>
      <AstroInner>
        <AstroClose onClick={() => dispatch(astroBoxIsOpen())}>X</AstroClose>
        <PeopleContainer slide={value > 2300 ? 0 : value}>
          {astroMapping}
        </PeopleContainer>
      </AstroInner>
    </AstroContainer>
  );
};

export default Astros;
