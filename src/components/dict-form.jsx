import React, { useState, useEffect } from 'react';
import dictionary from '../dictionaries/words_quechua.json'; // Importa el archivo JSON

export default function DictionaryForm() {
  const [word, setWord] = useState(''); // Estado para almacenar la palabra a buscar
  const [definition, setDefinition] = useState(''); // Estado para almacenar el significado de la palabra

  // Función de manejo de eventos para el cambio en el campo de entrada
  const handleChange = (event) => {
    setWord(event.target.value);
  }

  // La función useEffect se ejecutará cada vez que se actualice el estado de word
  useEffect(() => {
    // Busca el significado de la palabra en el archivo JSON
    const wordDefinition = dictionary[word];

    // Si la palabra se encuentra en el archivo JSON, actualiza el significado en el estado
    if (wordDefinition) {
      setDefinition(wordDefinition);
    } else {
      setDefinition('');
    }
  }, [word]); // Dependencia de word para que la función useEffect se ejecute cada vez que se actualice el estado de word

  return (
    <form>
      <label htmlFor="word">Ingresa una palabra:</label>
      <input
        type="text"
        id="word"
        value={word}
        onChange={handleChange}
      />
      {definition && <p>{definition}</p>}
    </form>
  );
}