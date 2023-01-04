import React, { useState, useEffect } from 'react';
import dictionaryQuechua from '../dictionaries/words_quechua.json'; // Importa el archivo JSON
import dictionarySpanish from '../dictionaries/words_spanish.json';

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

const textStyle = {
    marginBottom: '20px',
    fontSize: '20px'
}

const labelStyle = {
    marginBottom: '20px',
    display: 'inline-block',
    fontSize: '23px'
}

const selectStyle = {
    ...labelStyle,
    fontWeight: 'bold',
    color: '#513728',
    borderRadius: '5px',
    border: '3px solid #b8a870',
    backgroundColor: '#e5d092',
    padding: '7px 52px',
    display: 'flex',
    justifyContent: 'center'
}

export default function DictionaryForm() {
    const [word, setWord] = useState(''); // Estado para almacenar la palabra a buscar
    const [language, setLanguage] = useState('español'); // Estado para almacenar la palabra a buscar
    const [definitions, setDefinitions] = useState([]); // Estado para almacenar los significados de las palabras

    // Función de manejo de eventos para el cambio en el campo de entrada
    const handleChangeWord = (event) => {
        setWord(event.target.value);
    }

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    // La función useEffect se ejecutará cada vez que se actualice el estado de word
    useEffect(() => {
        if (word !== '') {
            const dictionaries = {
                español: dictionarySpanish,
                quechua: dictionaryQuechua
            }
            const dictionary = dictionaries[language]
            // Filtra el archivo JSON para encontrar las palabras que contengan la palabra a buscar
            const filteredWords = Object.keys(dictionary).filter((dictWord) => dictWord.toLowerCase().includes(word.toLowerCase()));
            
            // Toma los primeros 10 resultados
            const topResults = filteredWords.slice(0, 10);
            
            // Crea un array de definiciones para cada palabra encontrada
            const definitions = topResults.map((result) => {
                return [result, dictionary[result]];
            });
            setDefinitions(definitions);
        }
    }, [word, language]); // Dependencia de word para que la función useEffect se ejecute cada vez que se actualice el estado de word

    return (
    <form>
        <label style={labelStyle} htmlFor="language">Selecciona el idioma: </label>
        <br />
        <select
            id="language"
            style={selectStyle}
            value={language}
            onChange={handleChangeLanguage}
        >
            <option value="español">Español</option>
            <option value="quechua">Quechua</option>
        </select>
        <br />
        <div>
            <label style={labelStyle} htmlFor="word">Ingresa una palabra en {language}: </label>
            <br />
            <input
                type="text"
                autoComplete='off'
                id="word"
                value={word}
                style={inputStyle}
                placeholder={language === 'español' ? 'llevar' : 'apamuy'}
                onChange={handleChangeWord}
            />
            {word.length > 0 && (
                <>
                    {definitions.map((definition, index) => (
                        <p style={textStyle}>
                            <span style={wordDefinitionStyle}>{definition[0]}: </span>{definition[1]}
                        </p>
                    ))}
                </>
            )}
        </div>
    </form>
    );
}