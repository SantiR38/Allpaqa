import * as React from "react"
import DictionaryForm from "../components/dict-form"

const headerBoxStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  marginTop: 20
}

const pageStyles = {
  color: "#513728",
  maxWidth: 335,
  margin: 'auto',
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
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
  return (
    <main style={pageStyles}>
      <div style={headerBoxStyles}>
        <img src="/icons/icon-144x144.png" alt="Alpaca" />
        <div>
        <h1 style={headingStyles}>Allpaqa</h1>
        <br />
        <h3 style={headingAccentStyles}>Diccionario bilingüe<br />español - quechua</h3>
        </div>
      </div>

      <DictionaryForm></DictionaryForm>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allpaqa</title>
