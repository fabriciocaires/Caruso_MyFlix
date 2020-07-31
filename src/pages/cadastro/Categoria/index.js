import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

function setValue(chave,valor) {
  // chave: nome, descricao e cor
  setValues({
    ...values,
   [chave]: valor, // nome: 'valor'
  })
}
 
function handleChange(infosDoEvento) {
  //const { getAttribute, value} = infosDoEvento.target;
  setValue(
    infosDoEvento.target.getAttribute('name'),
    infosDoEvento.target.value
   );
}


useEffect(() => {
  console.log("hello hau are yu");
  const URL_TOP = 'https://caruso-val-myflix.herokuapp.com/categorias';
  fetch(URL_TOP)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta, 
      ]);
    });

  }, []);

    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
          <form onSubmit={ function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            setCategorias([ 
            ...categorias,
            values
          ]);   
            setValues(valoresIniciais);
          }}>

            <FormField
              label = "Nome da Categoria"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />

            <FormField
              label = "Descrição"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />

            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />

          <Button>
            Cadastro
          </Button>
          </form>

          {categorias.length === 0 && (
            <div>
            Loading...
          </div>
          )}

          <ul>
            {categorias.map((categoria) => {
              return (
                <li key={`${categoria.nome}`}>                  
                    {categoria.nome} 
                </li>
              )
            })}
          </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;