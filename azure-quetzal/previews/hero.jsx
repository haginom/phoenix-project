import React from 'react'

const HeroPreview = ({document}) => {
  const article = document.displayed.caseStudyBuilder
return (
<>
{article.map((component, index) => {
    if (component._type === 'hero'){
      console.log(component)
      return ( <React.Fragment key={index}>
      <h1>{`${component.heading}`}</h1>
      <h2>{`${component.tagline}`}</h2>
      </React.Fragment>)
    } else {
      return null
    }
    
  })}
  </>
)
  
  
}

export default HeroPreview