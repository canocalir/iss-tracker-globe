import React from 'react'
import { PersonCardContainer } from './styled';

type Props =  {
    astro: {
        name: string;
        craft: string;
    }
}

const PersonCard = ({ astro }:Props) => {
  return (
    <PersonCardContainer>
    <div>{astro.name}</div>
    <div>{astro.craft}</div>
    </PersonCardContainer>
  )
}

export default PersonCard