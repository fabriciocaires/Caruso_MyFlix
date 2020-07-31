import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroVideo(){
    return(
      <PageDefault>
        <h1>Cadastro de Video</h1>

        <Link to="categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;