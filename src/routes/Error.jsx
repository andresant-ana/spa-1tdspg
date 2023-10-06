import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="cabecalho">
        <h1>Error 404</h1>
        <p className="msg">A pagina que voce tentou acessar nao existe</p>
        <Link to="/" className="btn">Voltar para a página inicial</Link>

      </div>
    </>
  )
}