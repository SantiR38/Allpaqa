import React, { useState, useEffect } from 'react';
import dictionaryQuechua from '../dictionaries/words_quechua.json'; // Importa el archivo JSON
import dictionarySpanish from '../dictionaries/words_spanish.json';

const styles = {
    form: {
        paddingBottom: '20px'
    },
    theme: {
        light: {
            borderColor: '#d9ca98',
            backgroundColor: '#faf0bb',
            color: '#513728'
        },
        dark: {
            borderColor: '#191919',
            backgroundColor: '#343333',
            color: '#C5C5C5'
        }
    },
    container: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
}

const inputStyle = {
    height: '40px',
    fontSize: '24px',
    borderRadius: '15px 5px'
}

const wordDefinitionStyle = {
    fontWeight: 'bold'
}

const textStyle = {
    marginBottom: 0,
    fontSize: '20px'
}

const labelStyle = {
    display: 'inline-block',
    fontSize: '23px'
}

const selectStyle = {
    ...labelStyle,
    fontWeight: 'bold',
    borderRadius: '15px 5px',
    border: '3px solid',
    padding: '7px 52px',
    marginBottom: '25px'
}

export default function DictionaryForm(props) {
    const [word, setWord] = useState(''); // Estado para almacenar la palabra a buscar
    const [language, setLanguage] = useState('español'); // Estado para almacenar la palabra a buscar
    const [definitions, setDefinitions] = useState([]); // Estado para almacenar los significados de las palabras
    const [exactDefinition, setExactDefinition] = useState([]); // Estado para almacenar el significado principal
    const [labelTheme, setlabelTheme] = useState(); // Estado para almacenar el tema del label y el select
    let { theme } = props;

    // Función de manejo de eventos para el cambio en el campo de entrada
    const handleChangeWord = (event) => {
        setWord(event.target.value);
    }

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    const getDefinitions = (word, dictionary, isExactMatch, maxLength) => {
        let filteredWords = []
        if (isExactMatch) {
            filteredWords = Object.keys(dictionary).filter(
                (dictWord) => dictWord.toLowerCase().startsWith(word.toLowerCase())
            );
        } else if (maxLength > 0) {
            filteredWords = Object.keys(dictionary).filter(
                (dictWord) => dictWord.toLowerCase().includes(word.toLowerCase())
            );
        } else {
            return []
        }

        // Toma los primeros resultados
        const topResults = filteredWords.slice(0, maxLength);

        const definition = topResults.map((result) => {
            return [result, dictionary[result]];
        });
        return definition;
    }

    // La función useEffect se ejecutará cada vez que se actualice el estado de word
    useEffect(() => {
        if (word !== '') {
            const dictionaries = {
                español: dictionarySpanish,
                quechua: dictionaryQuechua
            }
            const dictionary = dictionaries[language]

            // DEFINICIONES EXACTAS
            const exactDefinition = getDefinitions(word, dictionary, true, 10)
            setExactDefinition(exactDefinition);

            // DEFINICIONES RELATIVAS
            const maxLength = 10 - exactDefinition.length
            const relativeDefinitions = getDefinitions(word, dictionary, false, maxLength)
            setDefinitions(relativeDefinitions);
        }
        setlabelTheme(theme === 'dark' ? styles.theme.dark : styles.theme.light);
    }, [word, language, theme]); // Dependencia de word para que la función useEffect se ejecute cada vez que se actualice el estado de word

    return (
    <form style={styles.form}>
        <div style={styles.container}>
            <label style={labelStyle} htmlFor="language">Selecciona el idioma: </label>
            <br />
            <select
                id="language"
                style={{...selectStyle, ...labelTheme}}
                value={language}
                onChange={handleChangeLanguage}
                >
                <option value="español">Español</option>
                <option value="quechua">Quechua</option>
            </select>
        </div>
        <div style={styles.container}>
            <label style={labelStyle} htmlFor="word">Ingresa una palabra en {language}: </label>
            <br />
            <input
                type="text"
                autoComplete='off'
                id="word"
                value={word}
                style={{...inputStyle, ...labelTheme}}
                placeholder={language === 'español' ? 'llevar' : 'apamuy'}
                onChange={handleChangeWord}
            />
            {word.length > 0 && ( // Primero muestro la definición exacta y después las aproximadas.
                <>
                    {exactDefinition.map((definition, index) => (
                        <p style={textStyle}>
                            <span style={wordDefinitionStyle}>{definition[0]}: </span>{definition[1]}
                        </p>
                    ))}
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