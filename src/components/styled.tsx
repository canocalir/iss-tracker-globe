import styled from "styled-components";

export const GlobeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HeadingMain = styled.h1`
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 10%;
  color: #ffffff;
  width: 20rem;
  font-size: 4rem;
  text-transform: uppercase;
  text-shadow: -2px 2px 2px #ced0d3;
  letter-spacing: -0.05em;
  user-select: none;
  text-transform: uppercase;
  transition: all 0.25s ease-out;
  @media (max-width: 768px) {
    top: 5%;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    left: 0;
  }
`;

export const LocationMain = styled(HeadingMain)`
  top: 51%;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    top: 12%;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    left: 0;
  }
`

export const Time = styled(HeadingMain)`
  top: 60%;
  @media (max-width: 768px) {
    top: 8%;
  }
`;

export const AstroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 18rem;
  bottom: 0;
  background-color: #ffffffef;
  position: absolute;
  z-index: 1;
  border-radius: 2rem 2rem 0 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AstroButton = styled.button`
  width: 20rem;
  height: 3rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  position: absolute;
  top: 50%;
  right: 10%;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 768px) {
    top: 85%;
    font-size: 1rem;
    text-align: center;
    right: 0;
    width: 100%;
    border-radius: 0;
  }
  &:hover {
    background-color: #b6b3b3;
  }
`;

export const AstroInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AstroClose = styled.button`
  width: 2rem;
  height: 2rem;
  color: #ffffff;
  background-color: red;
  border: none;
  font-size: 1.2rem;
  position: absolute;
  border-top-right-radius:1rem;
  right: 0;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: #920707;
    transition: ease-in 300ms;
  }
`;

interface PeopleProps {
  slide: number | undefined;
}

export const PeopleContainer = styled.div<PeopleProps>`
  position: absolute;
  display: flex;
  width: max-content;
  padding: 0 2rem 0 2rem;
  gap: 2rem;
  justify-content: space-around;
  transform: translateX(-${(props) => props.slide}px);
  transition: 5s transform;
`;

export const PersonCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1.2rem;
  width: 200px;
`;

export const AstroImage = styled.img`
  height: 100%;
  max-width: 150px;
  border-radius: 0.5rem;
`;
