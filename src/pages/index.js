import * as React from "react"
import DictionaryForm from "../components/dict-form"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
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
