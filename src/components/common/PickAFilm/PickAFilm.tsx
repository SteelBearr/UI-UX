import * as Style from "./index.styled";
import {VscSymbolColor} from "react-icons/vsc";
import React from "react";
import Link from "next/link";

type PickAFilmProps = {
    switchTheme: () => void;
};

const PickAFilm = () => {
    return (
        <Style.Block>
            <Style.pad>
                <Style.Header>Dive into collection of hundreds of films!</Style.Header>
                <Style.Button href={`/filmsCatalog/`}>Watch</Style.Button>
            </Style.pad>
        </Style.Block>
    );
};
export default PickAFilm;