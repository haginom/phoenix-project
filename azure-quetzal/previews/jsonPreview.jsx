import React from 'react'

const JsonPreview = ({document}) => (
  <>
    <h1>JSON Data for {`${document.displayed.title}`}</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
)

export default JsonPreview
