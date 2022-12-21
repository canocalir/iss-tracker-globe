import styled from "styled-components";

export const GlobeContainer = styled.div`
    position: relative;
`

export const Heading = styled.h1`
    position: absolute;
    z-index: 1;
    top:20%;
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
    @media (max-width:768px){
        top:5%;
        left: 15%;
        font-size: 1rem;
    }
`

export const Time = styled(Heading)`
    top:55%;
    @media (max-width:768px){
        top:8%;
    }
`

export const AstroContainer = styled.div`
    display:flex;
    width: 100%;
    height: 15rem;
    bottom:0;
    background-color: #ffffff34;
    position: absolute;
    z-index: 1;
`

export const AstroButton = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    right: 15%;
    cursor: pointer;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover{
        background-color: #b6b3b3;
    }
`