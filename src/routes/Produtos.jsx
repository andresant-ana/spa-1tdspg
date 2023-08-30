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
            
                {listaprodutos.map( (produto, indice)=>(
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

export const listaprodutos = [
    {id:1, nome: 'Teclado', preco: 150},
    {id:2, nome: 'Mouse', preco: 120},
    {id:3, nome: 'Monitor', preco: 950},
]
