import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho(){

    const rotaAtual = useLocation();

    return(
        <>
            <header className="cabecalho">
                <h1>SHOP</h1>
                <ul>
                    <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "cabecalho"}>HOME</Link></li>
                    <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : "cabecalho"}>PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}