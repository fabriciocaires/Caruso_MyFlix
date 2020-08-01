import { useState } from 'react';


function useForm(valoresIniciais) {
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
    
    function clearForm (){
      setValues(valoresIniciais)
    }
  
      return {
        values,
        handleChange,
        clearForm,
      };
  }

  export default useForm;