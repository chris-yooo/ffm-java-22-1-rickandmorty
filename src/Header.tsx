import React from "react";
import styled from "styled-components";

export default function Header(){
    return (
        <StyledHeader>
            <h1>Rick and Morty App</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;

h1 {
    text-decoration: underline;
    font-size: 3rem;
}
  @media(max-width: 1024px) {
    h1 {
      text-decoration: underline;
      font-size: 1.6rem;
    }
  }
`