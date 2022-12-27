import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import './card.css';

function Card (props){
    const [city, setCity] = useState([]);

    useEffect(()=>{
        async function lerInformacoes(){
            const cidade = props.cidade;
            const path = "/forecast.json?key=5ab6bad506ad4ff9971120430220809&q=" + cidade + "&days=1&aqi=no&alerts=no&lang=pt";
      
        const resposta = await api.get(path);
        setCity(resposta.data);
    };

        lerInformacoes();
    }, []);

    if (city.length == 0){
        <h1>Loading...</h1>
    }
    else{

        const local = city.location.region;
        const temp_c = city.current.temp_c;
        const sens = city.current.feelslike_c;
        const previsao = city.forecast.forecastday[0].day.condition.text;
        const min = city.forecast.forecastday[0].day.mintemp_c;
        const max = city.forecast.forecastday[0].day.maxtemp_c;
        const uv = city.forecast.forecastday[0].day.uv;
        const umidade = city.forecast.forecastday[0].day.avghumidity;
        

        return(
            <div className="container_card">
                <h3 className="titulo">{local}</h3>
                <div className="titulo_temp_atual">
                    <p className="temp_atual">{temp_c}</p><p className="c">°c</p>
                </div>
                <div className="conteudo">
                    <p className="humidade"><strong>Previsão:</strong> {previsao}</p>
                    <div className="max_min">
                        <p><strong>Mín:</strong> {min}°C</p>
                        <p><strong>Máx:</strong> {max}°C</p>
                    </div>
                    <div className="sensa">
                        <p className="sensacaoT"><strong>S.Térmica:</strong> {sens}°C</p>
                    </div>
                    <div className="info2">
                        <p className="uv"><strong>UV:</strong> {uv}</p>
                        <p className="humidade"><strong>Umidade:</strong> { umidade }%</p>
                    </div>
                </div>
            </div>
        );       
    }
}


export default Card;