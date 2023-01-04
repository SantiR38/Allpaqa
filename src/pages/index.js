import * as React from "react"
import DictionaryForm from "../components/dict-form"

const pageStyles = {
  color: "#513728",
  maxWidth: 335,
  margin: 'auto',
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
  marginTop: 15,
  marginBottom: 44,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#4A469E",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Allpaqa 🦙🦙🦙
        <br />
        <span style={headingAccentStyles}>Diccionario bilingüe español - quechua</span>
      </h1>
      <DictionaryForm></DictionaryForm>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allpaqa</title>
