import * as React from "react"
import DictionaryForm from "../components/dict-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const headerBoxStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
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
      light:{
        fontSize: '250%',
        marginRight: 'auto',
        color: '#513728'
      },
      dark:{
        fontSize: '250%',
        marginRight: 'auto',
        color: '#C5C5C5'
      }
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
  color: "#5651bf",
}

const IndexPage = () => {
  const [currentIcon, setCurrentIcon] = React.useState(faMoon);
  const [currentIconStyle, setCurrentIconStyle] = React.useState(Styles.moonSun.icon.light);
  const [currentTheme, setcurrentTheme] = React.useState('light');
  const [currentThemeStyle, setcurrentThemeStyle] = React.useState(Styles.themes.light);

  const handleChangeIcon = () => {
    setcurrentThemeStyle(currentIcon === faSun ? Styles.themes.light : Styles.themes.dark);
    setCurrentIcon(currentIcon === faSun ? faMoon : faSun);
    setCurrentIconStyle(currentIcon === faSun ? Styles.moonSun.icon.light : Styles.moonSun.icon.dark);
    setcurrentTheme(currentIcon === faSun ? 'light' : 'dark');
  }

  return (
    <main style={currentThemeStyle}>
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
          <FontAwesomeIcon icon={currentIcon} style={currentIconStyle} />
        </button>
        <DictionaryForm theme={currentTheme}></DictionaryForm>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allpaqa</title>
