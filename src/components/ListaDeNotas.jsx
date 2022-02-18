import React from "react";
import { Component } from "react";
import Cards from "./Cards";

export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {
                    Array.of('Trabalho', 'Estudos', 'Pregação').map((categoria,index) => {
                        return (
                            
                                <li key={index}>
                                   <div>{categoria}</div>
                                    <Cards/>
                                 </li>
                                )
                    })
                }

            </ul>)
    }



}