import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import axios from "axios";

type Character = {
    id: number,
    name: string,
    image: string,
    origin: { name: string },
}

export default function CharacterGallery() {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
            })
    }, []);


    return (
        <StyledMain>
            {
                characters.map(character => {
                    return <CharacterCard
                        name={character.name}
                        img={character.image}
                        origin={character.origin.name}
                        key={nanoid()}/>
                })
            }
        </StyledMain>
    );
}

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`