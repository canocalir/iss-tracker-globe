import { useAppDispatch } from "../app/hooks"
import { astroBoxIsOpen } from "../features/astroSlice"
import { useGetPeopleInSpaceQuery } from "../services/issApi"
import PersonCard from "./PersonCard"
import { AstroClose, AstroContainer, AstroInner, PeopleContainer } from "./styled"

const Astros:React.FC = () => {
  const {data, isLoading, error} = useGetPeopleInSpaceQuery('astros')
  const dispatch = useAppDispatch()

  const astroMapping = data?.people?.map((astro, index) => {
    return <PersonCard key={index} astro={astro}/>
  })

  return (
    <AstroContainer>
      <AstroInner>
      <AstroClose onClick={() => dispatch(astroBoxIsOpen())}>X</AstroClose>
      <PeopleContainer>
      {astroMapping}
      </PeopleContainer>
      </AstroInner>
    </AstroContainer>
  )
}

export default Astros