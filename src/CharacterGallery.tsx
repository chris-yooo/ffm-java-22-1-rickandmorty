import React, {ChangeEvent, useEffect, useState} from 'react';
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
    const [searchInput, setSearchInput] = useState<string>("")

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
            })
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        setSearchInput(event.target.value);
        // console.log(searchInput);
    }

    const filterCharacter = characters
        .filter((character) => character.name.toLowerCase().includes(searchInput.toLowerCase()));

    console.log(filterCharacter);

    return (<>
            <StyledInput onChange={handleChange}/>

            <StyledMain>
                {
                    filterCharacter.map(character => {
                        return <CharacterCard
                            name={character.name}
                            img={character.image}
                            origin={character.origin.name}
                            key={nanoid()}/>
                    })
                }
            </StyledMain>
        </>
    );
}

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const StyledInput = styled.input`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`