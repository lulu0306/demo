import React from 'react'
import gql from 'graphql-tag'
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo'

const Tag = ({data:{loading,error,tag}}) => {
    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading</h1>
        return(
            <article>
              <Link className="close-search" to="/">Go Back</Link>
                <h1>{tag.name}</h1>
                 <div className='Product-placeholder'>
                 { tag.products.map((value, index) => {
                    return <a href={"/product/" + value.slug} key={index}>{value.name}</a>
                })}
                 </div>
                 <div>{tag.description}</div>
            </article>
          )
      }
export const singleTag = gql`
  query singleTag($slug: String!) {
    tag(where: {slug: $slug}) {
      id
      slug
      name
      products {
        name
        slug
      }
      description
    }
  }
`

export default graphql(singleTag, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Tag)
