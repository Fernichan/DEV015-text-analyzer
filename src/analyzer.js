const analyzer = {  
  getCharacterCount: (text) => {

    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    return text.replace(/[\s.,]/g, '').length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getWordCount: (text) => { 
    if (text==="") {
      return 0;
    }
    else
    {
      return text.split(' ').length;
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const matches = text.match(/\d+/g)
    return (matches ? matches.length : 0);
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const matches = text.match(/\d+/g);
    if (!matches) {
      return 0;
    }
    else
    {
      let sum = 0;
      for (let i = 0; i < matches.length; i++) {
        sum += parseFloat(matches[i]);
      }
      
      return sum;
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    const words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === ""){
      return 0;
    }
    else
    {
      let totalLength = 0;
      for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
      }

      return totalLength / words.length;
    }
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }
};

export default analyzer;
