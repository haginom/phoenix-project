import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {PortableText} from '@portabletext/react'
import client from '../sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const myPortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="display-1">{children}</h1>,
    p: ({ children }) => <p className="display-1">{children}</p>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
    number: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
  },
  marks: {
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
    strong: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
    underline: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const HeroPreview = ({document}) => {
  const article = document.displayed.caseStudyBuilder
  console.log(article)
  return (
  <>
  {article.map((component, index) => {
      if (component._type === 'hero'){
        return ( 
        <Container fluid key={index}>
          <Row>
            <Col  sm={6}></Col>
            <Col sm={6}> 
            <h1>{`${component.heading}`}</h1>
            <p>{`${component.tagline}`}</p>
            </Col>
          </Row>
      
        </Container>)
      } else
      if (component._type === 'sectionIntro'){
        return (
          <Container fluid key={index}>

          <p>
          {`${component.caseStudyIntro}`}
          </p>
          </Container>)
        
      } else 
      if (component._type === 'sectionText'){
        return (
        <Container fluid key={index}>
         {component.subHeading && <h2> {`${component.subHeading}`}</h2>}
        {component.content.map((item, index) =>{
          return(
          <div key={index}>
          <PortableText
            value={[item]}
            components={myPortableTextComponents}
          />
        </div>
       ) })}
      
      </Container>
      )
        } else if (component._type === 'sectionSingleImage'){
          return (
            <Container fluid key={index}>
              <img  alt={component.altText} src={urlFor(component.image).width(200).url()} />
            </Container>
        )
          } else
        {
          return null
        }
      }
  )
  }
  </>
  )}
export default HeroPreview