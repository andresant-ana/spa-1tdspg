import { ListaProdutos } from "../components/ListaProdutos";
import "./Produtos.css";

export default function Produtos() {


  return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            <table className="tabelaProd">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                    
                </tr>
            
                {ListaProdutos.map( (produto, indice)=>(
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                        </tr>
                ))}
            </table>

        </div>
    </>
  )
}
