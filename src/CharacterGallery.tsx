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
            <StyledMain>

                <StyledInput aria-label="namen suchen"
                             onChange={handleChange}
                             placeholder="Gebe hier einen Namen ein"/>

                <StyledSection>
                    {
                        filterCharacter.map(character => {
                            return <CharacterCard
                                name={character.name}
                                img={character.image}
                                origin={character.origin.name}
                                key={nanoid()}/>
                        })
                    }
                </StyledSection>
            </StyledMain>
        </>
    );
}

const StyledMain = styled.main`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  margin-top: 20px;
  padding: 5px;
  height: 30px;
  width: 250px;
  border: solid grey 2px;
  border-radius: 5pc;
`

const StyledSection = styled.section`
  margin: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`