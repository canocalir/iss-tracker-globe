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
  text-shadow: -5px 2px 5px #ced0d3;
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

export const Time = styled(HeadingMain)`
  top: 55%;
  @media (max-width: 768px) {
    top: 8%;
  }
`;

export const AstroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15rem;
  bottom: 0;
  background-color: #ffffffb0;
  position: absolute;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 768px) {
    height: 100%;
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
`;

export const AstroClose = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  color: #ffffff;
  background-color: red;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 0;
  cursor: pointer;
  &:hover {
    background-color: #920707;
    transition: ease-in 300ms;
  }
`;

export const PeopleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-around;
`

export const PersonCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
`
