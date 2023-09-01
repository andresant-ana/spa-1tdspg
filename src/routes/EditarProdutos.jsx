import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o id do produto com o HOOK useParam();
  const {id} = useParams();

    //Utilizando o filter na Lista de Produtos para recuperar um produto através do id como parâmetro.
    const prodRecuperadoPorId = ListaProdutos.filter( (produto) => {
        if(produto.id == id){
          return produto;
        }
    });

  return (
    <>
        <div>
            <h1>EDITAR-PRODUTOS</h1>
            <p>NOME: - {prodRecuperadoPorId[0].nome}</p>
            <p>PREÇO: - {prodRecuperadoPorId[0].preco}</p>
        </div>
    </>
  )
}
