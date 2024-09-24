import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import pokemonImage from "../assets/International_Pokémon_logo.svg.png";
import PokemonMinCard from "../Card/PokemonMinCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const MyPokedex = () => {
    return (
        <div className="background-container"
            style={{
                overflowY: "auto",
            }}>
            <Header />
            <div
                className="text-center"
                style={{
                    backgroundColor: "#B0B0B0",
                    paddingTop: "80px",
                    marginLeft: "320px",
                    marginRight: "320px",
                    overflow: "auto",
                    height: "91.4%",
                }}
            >
            </div>
        </div>
    );
}

export default MyPokedex;