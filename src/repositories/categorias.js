import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function create(ojbDaCategoria) {
    return fetch(`${URL_CATEGORIES}?_embed=categorias`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(ojbDaCategoria),
    })
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json(); 
                return resposta;
            }

            throw new Error('Não deu para cadastrar :( :(');
        });
    }
    

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json(); 
                return resposta;
            }

            throw new Error('Não deu :(');
        });
    }

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json(); 
                return resposta;
            }

            throw new Error('Não deu :(');
        });
    }

export default {
    create,
    getAllWithVideos,
    getAll,
};