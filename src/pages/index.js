import * as React from "react"
import DictionaryForm from "../components/dict-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const headerBoxStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  paddingTop: 20
}

const Styles = {
  page: {
    maxWidth: 335,
    margin: 'auto',
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
  },
  themes: {
    light: {
      margin: 0,
      color: "#513728",
      backgroundColor: "#FFF6C7"
    },
    dark: {
      margin: 0,
      color: "#C5C5C5",
      backgroundColor: "#262626"
    }
  },
  moonSun: {
    icon: {
      fontSize: '250%',
      marginRight: 'auto'
    },
    button: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      marginBottom: 20,
      marginLeft: 150
    }
  }
}
const headingStyles = {
  marginBottom: 0,
  maxWidth: 320,
}
const headingAccentStyles = {
  marginTop: 0,
  color: "#4A469E",
}

const IndexPage = () => {
  const [currentIcon, setCurrentIcon] = React.useState(faMoon);
  const [currentTheme, setCurrentTheme] = React.useState(Styles.themes.light);

  const handleChangeIcon = () => {
    setCurrentTheme(currentIcon === faSun ? Styles.themes.light : Styles.themes.dark);
    setCurrentIcon(currentIcon === faSun ? faMoon : faSun);
  }

  return (
    <main style={currentTheme}>
      <div style={Styles.page}>
        <div style={headerBoxStyles}>
          <img src="/icons/icon-144x144.png" alt="Alpaca" />
          <div>
          <h1 style={headingStyles}>Allpaqa</h1>
          <br />
          <h3 style={headingAccentStyles}>Diccionario bilingüe<br />español - quechua</h3>
          </div>
        </div>
        <button style={Styles.moonSun.button} onClick={handleChangeIcon}>
          <FontAwesomeIcon icon={currentIcon} style={Styles.moonSun.icon} />
        </button>
        <DictionaryForm></DictionaryForm>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allpaqa</title>
