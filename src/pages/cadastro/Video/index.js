import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo );
  const {handleChange,values} = useForm({
    titulo: 'Video Exemplo',
    url: 'https://www.youtube.com/watch?v=pLaBoH7xgv8',
    categoria: 'Gemaplys',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

    return(
      <PageDefault>
        <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
      //  alert("Video Cadastrado");

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        })

        console.log('Escolhida',categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log("FOI!");
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url do video"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />


          <Button type="submit">
            Cadastro
          </Button>
      </form>



        <Link to="categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;