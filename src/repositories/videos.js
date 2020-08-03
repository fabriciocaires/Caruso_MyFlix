import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objDoVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objDoVideo),
    })
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json(); 
                return resposta;
            }

            throw new Error('Não deu para cadastrar :( :(');
        });
    }

export default {
    create,
};