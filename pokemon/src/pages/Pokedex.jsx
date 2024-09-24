import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MyPokedex = () => {
    const [elements, setElements] = useState([]);

    const addElement = () => {
        setElements([...elements, { col1: 'Novo Elemento 1', col2: 'Novo Elemento 2' }]);
    };
    const Button = styled.button`
    padding: 10px 20px;
    margin-bottom: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  
    &:hover {
      background-color: #0056b3;
    }
  `;
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

                <h2
                    style={{
                        maxWidth: "420px",
                        margin: "0",
                        fontSize: "32px",
                        fontWeight: 800,
                        lineHeight: 1.4,
                    }}
                >
                    Minha Pokédex
                </h2>
                <Button onClick={addElement}>Adicionar Elemento</Button>
            </div>
        </div>

    );


}

export default MyPokedex;