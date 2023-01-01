import React, { useState, useEffect } from 'react';
import dictionary from '../dictionaries/words_quechua.json'; // Importa el archivo JSON

const inputStyle = {
    color: '#513728',
    height: '40px',
    fontSize: '24px',
    borderColor: 'green',
    borderRadius: '10px'
}

const wordDefinitionStyle = {
    fontWeight: 'bold'
}

const resultsStyle = {
    marginBottom: '10px'
}

export default function DictionaryForm() {
    const [word, setWord] = useState(''); // Estado para almacenar la palabra a buscar
    const [definitions, setDefinitions] = useState([]); // Estado para almacenar los significados de las palabras

    // Función de manejo de eventos para el cambio en el campo de entrada
    const handleChange = (event) => {
        setWord(event.target.value);
    }

    // La función useEffect se ejecutará cada vez que se actualice el estado de word
    useEffect(() => {
        // Filtra el archivo JSON para encontrar las palabras que contengan la palabra a buscar
        const filteredWords = Object.keys(dictionary).filter((dictWord) => dictWord.includes(word));

        // Toma los primeros 10 resultados
        const topResults = filteredWords.slice(0, 10);

        // Crea un array de definiciones para cada palabra encontrada
        const definitions = topResults.map((result) => {
            return [result, dictionary[result]];
        });
        setDefinitions(definitions);
    }, [word]); // Dependencia de word para que la función useEffect se ejecute cada vez que se actualice el estado de word

    return (
    <form>
        <label htmlFor="word">Ingresa una palabra: </label>
        <input
        type="text"
        id="word"
        value={word}
        style={inputStyle}
        onChange={handleChange}
        />
        {definitions.length > 0 && word.length > 0 && (
        <ul>
            {definitions.map((definition, index) => (
            <li style={resultsStyle} key={index}><span style={wordDefinitionStyle}>{definition[0]}: </span>{definition[1]}</li>
            ))}
        </ul>
        )}
    </form>
    );
}