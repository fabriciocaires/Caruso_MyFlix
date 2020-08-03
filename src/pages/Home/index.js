import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';


function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);


  useEffect(() => {
    //http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos); 
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, []);



  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0  && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url = {dadosIniciais[0].videos[0].url}
                videoDescription="É A POTÊNCIA"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
      

          return (
            <Carousel
            key={categoria.id}
            category={categoria}
            />
          );
        })}
     
      {/*
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      /> */}
      {/* <Footer
      FooterBase
      /> */}


      </PageDefault>
  );
}

export default Home;
