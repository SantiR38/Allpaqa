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
const buttonStyles = {
  backgroundColor: 'transparent',
  borderRadius: '15px 5px',
  fontSize: '120%',
  width: 229,
  marginBottom: 20,
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
    button: {
      light:{
        ...buttonStyles,
        borderColor: '#d9ca98',
        color: '#513728'
      },
      dark:{
        ...buttonStyles,
        borderColor: '#191919',
        color: '#C5C5C5'
      }
    },
    icon: {
      marginRight: 10,
      fontSize: '1em'
    }
  },
  image: {
    width: 144,
    height: 144
  },
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
}
const headingStyles = {
  marginBottom: 0,
  maxWidth: 320,
}
const headingAccentStyles = {
  marginTop: 0,
  color: "#5651bf",
  fontSize: '1.15rem'
}

const IndexPage = () => {
  const [currentIcon, setCurrentIcon] = React.useState(faMoon);
  const [currentButtonStyle, setCurrentButtonStyle] = React.useState(Styles.moonSun.button.light);
  const [currentTheme, setcurrentTheme] = React.useState('light');
  const [currentThemeStyle, setcurrentThemeStyle] = React.useState(Styles.themes.light);
  const [themeMessage, setCurrentThemeMessage] = React.useState('oscuro')

  const handleChangeIcon = () => {
    setcurrentThemeStyle(currentIcon === faSun ? Styles.themes.light : Styles.themes.dark);
    setCurrentIcon(currentIcon === faSun ? faMoon : faSun);
    setCurrentButtonStyle(currentIcon === faSun ? Styles.moonSun.button.light : Styles.moonSun.button.dark);
    setcurrentTheme(currentIcon === faSun ? 'light' : 'dark');
    setCurrentThemeMessage(currentIcon === faSun ? 'oscuro' : 'claro');
  }

  return (
    <main style={currentThemeStyle}>
      <div style={{...Styles.page, ...Styles.container}}>
        <div style={headerBoxStyles}>
          <img src="/icons/icon-144x144.png" alt="Alpaca" />
          <div>
            <h1 style={headingStyles}>Allpaqa</h1>
            <br />
            <h2 style={headingAccentStyles}>Diccionario bilingüe<br />español - quechua</h2>
          </div>
        </div>
        <div style={Styles.container}>
          <button style={currentButtonStyle} onClick={handleChangeIcon}>
            <FontAwesomeIcon icon={currentIcon} style={Styles.moonSun.icon} />
            Modo {themeMessage}
          </button>
        </div>
        <DictionaryForm theme={currentTheme}></DictionaryForm>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allpaqa</title>
