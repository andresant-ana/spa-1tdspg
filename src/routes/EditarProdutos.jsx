import { useParams } from "react-router-dom";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o id do produto com o HOOK useParam();
  const {id} = useParams();

  return (
    <>
        <div>
            <h1>EDITAR-PRODUTOS</h1>
            <p>Produto selecionado - {id}</p>
        </div>
    </>
  )
}
