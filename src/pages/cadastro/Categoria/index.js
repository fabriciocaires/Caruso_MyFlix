import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    text: '',
    cor: ''
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  
  const [categorias, setCategorias] = useState([]);



useEffect(() => {
  const URL_TOP =  window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://caruso-val-myflix.herokuapp.com/categorias';
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
            clearForm();
          }}>

            <FormField
              label="Nome da Categoria"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="Descrição"
              type="textarea"
              name="text"
              value={values.text}
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
                <li key={`${categoria.id}`}>          
                    {categoria.titulo}
                    {categoria.cor}
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