import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo );
  const {handleChange,values} = useForm({
    titulo: 'Deide Costa',
    text: 'Muinto guei kk',
    cor: '#72195A',
  });

  //const { handleChange, values, clearForm } = useForm(valoresIniciais);
  
  // const [categorias, setCategorias] = useState([]);



useEffect(() => {
  categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form onSubmit={(event) => {
        event.preventDefault();
      //  alert("Video Cadastrado");




        categoriasRepository.create({
          titulo: values.titulo,
          text: values.text,
          cor: values.cor,
        })
          .then(() => {
            console.log("FOI!");
            // eslint-disable-next-line no-restricted-globals
            history.push('/');
          });
      }}
      >
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

              <Button type="submit">
                Cadastro
              </Button>
          </form>

          {categorias.length === 0 && (
            <div>
            Loading...
          </div>
          )}

          <ul> Nome
            {categorias.map((categoria) => {
              return (
                <li key={`${categoria.id}`}>          
                    {categoria.titulo}
                    {categoria.text}
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