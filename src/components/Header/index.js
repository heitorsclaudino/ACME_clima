import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header(){
    return(
        <header>
            <div className="header_content">
                <Link className="link_titulo" to="/">ACME Tempo</Link>
                <Link className="link_home" to="/">Home</Link>
            </div>
        </header>
    );
};