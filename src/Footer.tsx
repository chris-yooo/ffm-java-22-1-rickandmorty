import React from 'react';
import styled from "styled-components";

export default function Footer() {
    return (
        <StyledFooter>
            <h4>Website by chris_yooo©</h4>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;

h4 {
    text-decoration: underline;
font-size: 1.4rem;
}    
`