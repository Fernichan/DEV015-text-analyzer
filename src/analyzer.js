const analyzer = {  
  getCharacterCount: (text) => {

    return "Caracteres: " + text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    return "Caracteres sin espacio: " + text.replace( /\s/g, '').length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getWordCount: (text) => {
    
    return "Palabras: " + text.split(' ').length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const matches = text.match(/\d+/g)
    return "Números: " + (matches ? matches.length : 0);
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const matches = text.match(/\d+/g);
    if (!matches) {
      return "Suma de números: " + 0;
    }
    else
    {
      let sum = 0;
      for (let i = 0; i < matches.length; i++) {
        sum += parseFloat(matches[i]);
      }
      
      return "Suma de números: " + sum;
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    const words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === ""){
      return "Promedio longitud: " + 0;
    }
    else
    {
      let totalLength = 0;
      for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
      }

      return "Promedio longitud: " + totalLength / words.length;
    }
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }
};

export default analyzer;
