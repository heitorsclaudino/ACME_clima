import React from "react";
import Card from '../../components/Card';
import EstruturaPagina from "../../components/EstruturaPagina";
import "./styles.css";


export default function Home(){
    return(
        <EstruturaPagina className="EstruturaPagina">
            <div className="container">
                <div className="row">
                    <Card cidade="São paulo"/>
                </div>
                <div className="row">
                    <Card cidade="Salvador"/>
                </div>
                <div className="row">
                    <Card cidade="Curitiba"/>
                </div>
            </div>
        </EstruturaPagina>
    );
};