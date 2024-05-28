import analyzer from './analyzer.js';

const charCount =  document.querySelector('[data-testid="charCount"]');
const charCountNoSpaces = document.querySelector('[data-testid="charCountNoSpaces"]');
const wordCount = document.querySelector('[data-testid="wordCount"]');
const numberCount = document.querySelector('[data-testid="numberCount"]');
const numberSum = document.querySelector('[data-testid="numberSum"]');
const avgWordLength = document.querySelector('[data-testid="avgWordLength"]');

/* escuchar eventos caja de texto*/
const text = document.querySelector('textarea[name="user-input"]');
text.addEventListener("input", updateMetrics); /* rescatar valor ingresado por el usuario en caja de texto */

function updateMetrics() {
    charCount.textContent = analyzer.getCharacterCount(text.value);
    charCountNoSpaces.textContent = analyzer.getCharacterCountExcludingSpaces(text.value);
    wordCount.textContent = analyzer.getWordCount(text.value);
    numberCount.textContent = analyzer.getNumberCount(text.value);
    numberSum.textContent = analyzer.getNumberSum(text.value);
    avgWordLength.textContent = analyzer.getAverageWordLength(text.value);
  }

/* escuchar evento boton reset*/
const botonReset = document.getElementById("resetButton");
botonReset.addEventListener("click", limpiar); /* identificamos y traemos el elemento boton */
  
function limpiar(){
    text.value = "";
    updateMetrics();
}


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 