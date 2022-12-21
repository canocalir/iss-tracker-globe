import React from 'react'

type Props =  {
    astro: {
        name: string;
        craft: string;
    }
}

const PersonCard = ({ astro }:Props) => {
  return (
    <>
    <div>{astro.name}</div>
    <div>{astro.craft}</div>
    </>
  )
}

export default PersonCard