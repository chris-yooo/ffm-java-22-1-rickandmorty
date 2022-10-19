import React from 'react';
import styled from 'styled-components'

type Props = {
    name: string,
    img: string,
    origin: string,
}

export default function CharacterCard(props: Props) {
    return (
        <StyledSection>
            <h2>{props.name}</h2>
            <img alt={props.name} src={props.img}/>
            <h3>{props.origin}</h3>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    border: solid 2px black;
    border-radius: 2pc;
    box-shadow: 4px 4px 8px 4px #3c3c3c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    width: 300px;
    height: auto;
    /*flex-grow: 1;*/
    /*font-size: 1.7vw;*/

img {
    width: 250px;
    height: auto;
}
  
  h2 {
  font-size: 1.4rem;
  }
  h3 {
    font-size: 1.0rem;
  }
}

@media(max-width: 1024px) {

        width: 150px;
        margin: 10px;

    h2 {
        font-size: 1.0rem;
        text-align: center;
    }
    h3 {
        font-size: 0.7rem;
        text-align: center;
    }
    img {
        width: 100px;
    }
`